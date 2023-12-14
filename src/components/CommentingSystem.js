import React, { useEffect, useState } from 'react'
import { timeAgo } from '../functionHelpers/Time';
import { API, PATH_NAME, USER_TYPES } from '../Variables/GLOBAL_VARIABLE';
import { MdDelete } from "react-icons/md";
import { CiFlag1 } from "react-icons/ci";
import { useLocation, useNavigate } from 'react-router';
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';
import { ProfanityChecker } from '../functionHelpers/ProfanityChecker';

export default function CommentingSystem({ contentID, forumID }) {
    /** 
     * This component is used for content commenting systems.
     * Attribute:
     * contentID - used for finding corresponding comments for that content.
     */
    const [addComment, setAddComment] = useState(false); //used for revealing the comment box
    const [comment, setComment] = useState(); // comment box contents
    const [revealReplies, setRevealReplies] = useState({}); //used to reveal certain amount of replies to a comment
    const [accountType, setAccountType] = useState(USER_TYPES.Guest);
    const [email, setEmail] = useState("");
    const [comments, setComments] = useState([]);
    const [filter, setFilter] = useState();

    useEffect(() => {
        var jwt = Cookies.get("token");
        if (jwt) {
            var payload = jwtDecode(jwt);
            setAccountType(payload.accountType);
            setEmail(payload.sub);
        } else {
            setAccountType(USER_TYPES.Guest);
        }
        if (contentID) {
            axios.get(API.getComment(contentID), {})
                .then((response) => response.data)
                .then((data) => {
                    setComments(data);
                })
        } else if (forumID) {
            axios.get(API.getComment(forumID), {}) //change this to getting comments for forums
                .then((response) => response.data)
                .then((data) => {
                    setComments(data);
                })
        }
        // set up filter
        setFilter(new ProfanityChecker());
    }, [])

    const modifyRevealedReplies = (commentID, value) => { //handler of multiple states (dictionary in useState)
        setRevealReplies((prevState) => ({ ...prevState, [commentID]: value }));
    };

    const navigate = useNavigate();

    // create initial contents for revealReplies
    useEffect(() => {
        comments.map((comment) => modifyRevealedReplies(comment.commentID, 1))
    }, [])

    const handleCheckForProfanity = () => {
        if (filter && comment.length > 0) {
            return filter.isProfanity(comment);
        }
    }


    const handleCommentPublish = () => {
        setAddComment(false);
        if (handleCheckForProfanity()) {
            alert(`Oops! It looks like there might be some inappropriate language in your comment (word: ${filter.getProfanity(comment)}). If you believe this is a mistake, please let us know.`)
            setComment("");
            return;
        }
        axios.post(API.postComment, {
            "contentID": contentID,
            "comment": comment
        }, {
            headers: {
                "Authorization": `Bearer ${Cookies.get("token")}`
            },
            withCredentials: true
        })
            .then((response) => response.data)
            .then((data) => {
                setComments([...comments, data]);
                setComment("");
            })
    }

    const handleDelete = (comment) => {
        axios.post(API.deleteComment(comment.commentID), {}, {
            headers: {
                "Authorization": `Bearer ${Cookies.get("token")}`
            },
            withCredentials: true
        })
        var new_comments = comments;
        new_comments.splice(new_comments.indexOf(comment), 1);
        setComment(new_comments);
    }

    return (
        <>
            {/** add comment button */}
            {accountType !== USER_TYPES.Guest ?
                <div
                    className='flex bg-lgu-yellow w-fit p-2 mt-10 rounded-full select-none cursor-pointer hover:brightness-95'
                    onClick={() => {
                        setAddComment(!addComment)
                        setComment("");
                    }}>
                    + Add a Comment
                </div>
                :
                <div
                    className='flex bg-gray-200 text-gray-500 border-dashed border-2 border-gray-500 w-fit p-2 mt-10 rounded-lg select-none cursor-pointer hover:brightness-95'
                    onClick={() => navigate(PATH_NAME.Accounts.SignIn)}>
                    Sign In to join the conversation
                </div>
            }

            {addComment ?
                <div>
                    {/** comment box */}
                    <div className='bg-gray-200 h-40 w-11/12 rounded-3xl mt-10'>
                        <textarea className='w-full h-full rounded-3xl p-3 resize-none'
                            placeholder='Comment...'
                            value={comment}
                            onChange={(e) => setComment(e.target.value)} />
                    </div>
                    {/** Buttons (cancel and comment) */}
                    <div className='flex mt-3'>
                        <div className='p-2 outline outline-2 outline-lgu-yellow rounded-full select-none cursor-pointer'
                            onClick={() => {
                                setAddComment(false);
                                setComment("");
                            }}
                        >Cancel</div>
                        <div className='p-2 ml-3 bg-lgu-yellow rounded-full select-none cursor-pointer'
                            onClick={handleCommentPublish}
                        >Comment</div>
                    </div>
                </div>
                :
                null
            }
            <p className='text-gray-700 mt-10'>Comments</p>
            {/** display comments */}
            <div className='px-10 mt-5'>
                {comments.length > 0 ?
                    comments.map((comment, index) => {
                        return (
                            <Comment
                                key={index}
                                comment={comment}
                                revealReplies={revealReplies}
                                setRevealReplies={modifyRevealedReplies}
                                isGuest={accountType === USER_TYPES.Guest}
                                currentEmail={email}
                                handleDelete={() => handleDelete(comment)} />
                        );
                    })
                    :
                    <div>
                        Be the first to comment!
                    </div>
                }
            </div>
        </>
    )
}
function Comment({ comment, revealReplies, setRevealReplies, isGuest, currentEmail, handleDelete }) {
    const [replyBox, setReplyBox] = useState(false); // used for revealing the reply box
    const [reply, setReply] = useState() // reply box contents
    const [report, setReport] = useState(false) // used for revealing report box
    const [vote, setVote] = useState(0)
    const [initialVote, setInitialVote] = useState(7)
    const location = useLocation();
    const ownComment = currentEmail === comment.commenter.email;

    const handleReport = () => {
        axios.post(API.reportContent, {
            "reported": comment.commenter.email,
            "reason": "Inappropriate comment",
            "context": null,
            "link": location.pathname,
        }, {
            headers: {
                "Authorization": `Bearer ${Cookies.get("token")}`
            },
            withCredentials: true
        })
        setReport(false);
    }

    return (
        <div>
            <table className="table-auto select-none mb-5 w-10/12">
                <tbody>
                    <tr className=''>
                        <td className='w-10 h-10'> {/** Display the user pfp in the upperleft-most cell */}
                            <img
                                src={comment.commenter.profilePicture ? "data:image/jpeg;base64," + comment.commenter.profilePicture : require("./../res/img/icon.png")}
                                alt={"Profile picture of " + comment.commenter.accountUsername}
                                className='rounded-full w-10/12 h-10/12 mx-auto my-auto'
                            />
                        </td>
                        <td className='flex'> {/** Display upload information beside the image such as: username, upload timestamp, and the topic */}
                            <div className='h-full align-contents-middle'>
                                <p className='text-sm h-full'>{comment.commenter.accountUsername}&nbsp;&nbsp;&nbsp;<span className='text-gray-500'>{timeAgo(comment.timestamp)}</span></p>
                            </div>
                            {
                                isGuest ? // remove ` || !isGuest ` after debugging
                                    null
                                    :
                                    <div
                                        className='ml-32 select-none cursor-pointer hover:brightness-95'
                                        onClick={() => setReport(!report)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5' viewBox="0 0 24 24"
                                            fill="none" stroke="#000000" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                                            <circle cx="12" cy="12" r="1" />
                                            <circle cx="19" cy="12" r="1" />
                                            <circle cx="5" cy="12" r="1" />
                                        </svg>
                                    </div>
                            }
                            {report ?
                                <div
                                    className='flex ml-2 select-none cursor-pointer hover:brightness-95 text-sm'
                                    onClick={ownComment ? handleDelete : handleReport}>
                                    {ownComment ?
                                        <>
                                            <MdDelete />
                                            <p>Delete</p>
                                        </>
                                        :
                                        <>
                                            <CiFlag1 />
                                            <p>Report</p>
                                        </>
                                    }
                                </div>
                                :
                                null
                            }
                        </td>
                    </tr>
                    <tr>
                        <td></td> {/** Keep the cells below the image empty */}
                        <td className=''>{comment.comment}</td> {/** Display the first 400 characters of the body, trim it if it ends with a space, and add an ellipsis */}
                    </tr>
                    {/**<tr>
                        <td></td>
                        <td>
                            <div className='flex mt-5'>
                                <div className='flex bg-lgu-yellow w-fit p-2 rounded-full select-none'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                        className={'w-5 h-5 cursor-pointer bg-lgu-yellow rounded-full ' + (!isGuest ? 'hover:brightness-95 ' : '') + (vote === 1 ? 'brightness-90' : '')}
                                        fill="none" stroke="#000000" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"
                                        onClick={() => {
                                            if (!isGuest) {
                                                vote === 1 ? setVote(0) : setVote(1)
                                            }
                                        }}>
                                        <circle cx="12" cy="12" r="10" />
                                        <path d="M16 12l-4-4-4 4M12 16V9" />
                                    </svg>
                                    <p className='text-sm mx-2'>{initialVote + vote}</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" className={'w-5 h-5 cursor-pointer bg-lgu-yellow rounded-full ' + (!isGuest ? 'hover:brightness-95 ' : '') + (vote === -1 ? 'brightness-90' : '')} viewBox="0 0 24 24"
                                        fill="none" stroke="#000000" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"
                                        onClick={() => {
                                            if (!isGuest) {
                                                vote === -1 ? setVote(0) : setVote(-1)
                                            }
                                        }}>
                                        <circle cx="12" cy="12" r="10" />
                                        <path d="M16 12l-4 4-4-4M12 8v7" />
                                    </svg> 
                                </div>
                                {
                                    !isGuest ?
                                        <div
                                            className='flex bg-lgu-yellow w-fit p-2 ml-10 rounded-full select-none cursor-pointer hover:brightness-95'
                                            onClick={() => setReplyBox(!replyBox)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5' viewBox="0 0 24 24"
                                                fill="none" stroke="#000000" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                                            </svg>
                                            <p className='text-sm mx-2'>Reply</p>
                                        </div>
                                        :
                                        null
                                }
                            </div>
                            {
                                replyBox ?
                                    <div className='border-l-2 border-lgu-green mb-3 ps-3'>
                                        <div className='bg-gray-200 h-20 w-11/12 rounded-3xl mt-10'>
                                            <textarea className='w-full h-full rounded-3xl p-3 resize-none'
                                                placeholder='Reply...'
                                                value={reply}
                                                onChange={(e) => setReply(e.target.value)} />
                                        </div>
                                        <div className='flex mt-3'>
                                            <div className='p-2 outline outline-2 outline-lgu-yellow rounded-full select-none cursor-pointer' onClick={() => setReplyBox(false)}>Cancel</div>
                                            <div className='p-2 ml-3 bg-lgu-yellow rounded-full select-none cursor-pointer'
                                                onClick={() => {
                                                    setReplyBox(false);
                                                    TODO: Save to database
                                                }}
                                            >Comment</div>
                                        </div>
                                    </div>
                                    :
                                    null
                            }
                        </td>
                    </tr> */}
                    {/* <tr>
                        <td></td>
                        <td>
                            <div className='border-l-2 border-lgu-green'>
                                {
                                    comment?.replyID?.map((reply, index) => {
                                        if (index < revealReplies[comment.commentID]) {
                                            return (<Reply reply={reply} key={index} className="mt-5 ml-10" isGuest={isGuest} />);
                                        } else if (index === revealReplies[comment.commentID]) {
                                            return (
                                                <div
                                                    className='flex ps-10 bg-gray-100 cursor-pointer'
                                                    onClick={() => setRevealReplies(comment.commentID, revealReplies[comment.commentID] + 5)}
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" className='w-6 h-6 stroke-lgu-green' viewBox="0 0 24 24"
                                                        fill="none" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                                                        <circle cx="12" cy="12" r="10" />
                                                        <line x1="12" y1="8" x2="12" y2="16" />
                                                        <line x1="8" y1="12" x2="16" y2="12" />
                                                    </svg>
                                                    <p className='my-auto ml-2'>{comment.replyID.length - revealReplies[comment.commentID]} more...</p>
                                                </div>
                                            );
                                        } else return null;
                                    })
                                }
                                {
                                    comment?.replyID?.length < revealReplies[comment.commentID] && comment?.replyID?.length > 3 ?
                                        <div
                                            className='flex ps-10 bg-gray-100 cursor-pointer'
                                            onClick={() => setRevealReplies(comment.commentID, 1)}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" className='w-6 h-6 stroke-lgu-green' viewBox="0 0 24 24"
                                                fill="none" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                                                <circle cx="12" cy="12" r="10" />
                                                <line x1="8" y1="12" x2="16" y2="12" />
                                            </svg>
                                            <p className='my-auto ml-2'>Show less...</p>
                                        </div>
                                        :
                                        null
                                }
                            </div>
                        </td>
                    </tr> */}
                </tbody>
            </table>
        </div>
    );
}
function Reply({ reply, className, isGuest }) {
    const [report, setReport] = useState(false) // used for revealing report box
    return (
        <div>
            <table className={"table-auto select-none mb-5 " + className}>
                <tbody>
                    <tr className=''>
                        <td className='w-10 h-10'> {/** Display the user pfp in the upperleft-most cell */}
                            <img
                                src={reply.userPFP}
                                alt={"Profile picture of " + reply.username}
                                className='rounded-full w-10/12 h-10/12 mx-auto my-auto'
                            />
                        </td>
                        <td className='flex'> {/** Display upload information beside the image such as: username, upload timestamp, and the topic */}
                            <div className='h-full align-contents-middle'>
                                <p className='text-sm h-full'>{reply.username}&nbsp;&nbsp;&nbsp;<span className='text-gray-500'>{timeAgo(reply.timestamp)}</span></p>
                            </div>
                            {
                                isGuest || !isGuest ? //remove the part ` || !isGuest`
                                    null
                                    :
                                    <div
                                        className='ml-32 select-none cursor-pointer hover:brightness-95'
                                        onClick={() => setReport(!report)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5' viewBox="0 0 24 24"
                                            fill="none" stroke="#000000" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                                            <circle cx="12" cy="12" r="1" />
                                            <circle cx="19" cy="12" r="1" />
                                            <circle cx="5" cy="12" r="1" />
                                        </svg>
                                    </div>
                            }
                            {report ?
                                <div className='flex ml-2 select-none cursor-pointer hover:brightness-95'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5' viewBox="0 0 24 24"
                                        fill="none" stroke="#000000" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
                                        <line x1="4" y1="22" x2="4" y2="15" />
                                    </svg>
                                    <p>Report</p>
                                </div>
                                :
                                null
                            }
                        </td>
                    </tr>
                    <tr>
                        <td></td> {/** Keep the cells below the image empty */}
                        <td className=''>{reply.reply}</td> {/** Display the first 400 characters of the body, trim it if it ends with a space, and add an ellipsis */}
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
