import React, { useEffect, useState } from 'react'
import { timeAgo } from '../functionHelpers/Time';

export default function CommentingSystem({ forumID }) {
    /** Add a comment */
    const [addComment, setAddComment] = useState(false);
    const [comment, setComment] = useState();
    const [revealReplies, setRevealReplies] = useState({});

    const modifyRevealedReplies = (commentID, value) => {
        setRevealReplies((prevState) => ({ ...prevState, [commentID]: value }));
    };

    var comments = [
        {
            commentID: forumID + "-1",
            username: "Th3Skyler08",
            userPFP: require("./../res/debug_img/userpfp5.png"),
            comment: "Coolio~!",
            bodyImgs: [require("./../res/debug_img/xenia_content_imgs1.png"), require("./../res/debug_img/xenia_content_imgs2.png"), require("./../res/debug_img/xenia_content_imgs3.png"), require("./../res/debug_img/xenia_content_imgs2.png"), require("./../res/debug_img/xenia_content_imgs1.png")],
            timestamp: Date.now() - 30 * 1000,
            replies: [
                {
                    replyID: forumID + "-1-1",
                    username: "Fr4ncyyy",
                    userPFP: require("./../res/debug_img/userpfp3.png"),
                    reply: "True!",
                    bodyImgs: [],
                    timestamp: Date.now() - 15 * 1000
                },
                {
                    replyID: forumID + "-1-2",
                    username: "Ghe3lo_",
                    userPFP: require("./../res/debug_img/userpfp1.png"),
                    reply: "I Agree!",
                    bodyImgs: [],
                    timestamp: Date.now() - 10 * 1000
                },
                {
                    replyID: forumID + "-1-3",
                    username: "X3_nia",
                    userPFP: require("./../res/debug_img/userpfp2.png"),
                    reply: "nahh... nah...",
                    bodyImgs: [],
                    timestamp: Date.now() - 5 * 1000
                },
            ]
        }
    ]

    useEffect(() => {
        comments.map((comment) => modifyRevealedReplies(comment.commentID, 1))
    }, [])

    return (
        <>
            <div
                className='flex bg-lgu-yellow w-fit p-2 mt-10 rounded-full select-none cursor-pointer hover:brightness-95'
                onClick={() => setAddComment(!addComment)}>
                + Add a Comment
            </div>
            {addComment ?
                <div>
                    <div className='bg-gray-200 h-40 w-11/12 rounded-3xl mt-10'>
                        <textarea className='w-full h-full rounded-3xl p-3'
                            placeholder='Comment...'
                            value={comment}
                            onChange={(e) => setComment(e.target.value)} />
                    </div>
                    <div className='flex mt-3'>
                        <div className='p-2 outline outline-2 outline-lgu-yellow rounded-full select-none cursor-pointer' onClick={() => setAddComment(false)}>Cancel</div>
                        <div className='p-2 ml-3 bg-lgu-yellow rounded-full select-none cursor-pointer'
                            onClick={() => {
                                setAddComment(false);
                                /** TODO: Save to database */
                            }}
                        >Comment</div>
                    </div>
                </div>
                :
                null
            }
            <p className='text-gray-700 mt-10'>Comments</p>
            <div className='px-10 mt-5'>
                {
                    comments.map((comment, index) => {
                        return (
                            <Comment key={index} comment={comment} revealReplies={revealReplies} setRevealReplies={modifyRevealedReplies} />
                        );
                    })
                }
            </div>
        </>
    )
}
function Comment({ comment, revealReplies, setRevealReplies }) {
    const [replyBox, setReplyBox] = useState(false);
    const [reply, setReply] = useState()
    return (
        <div>
            <table className="table-auto select-none mb-5 w-10/12">
                <tbody>
                    <tr className=''>
                        <td className='w-10 h-10'> {/** Display the user pfp in the upperleft-most cell */}
                            <img
                                src={comment.userPFP}
                                alt={"Profile picture of " + comment.username}
                                className='rounded-full w-10/12 h-10/12 mx-auto my-auto'
                            />
                        </td>
                        <td> {/** Display upload information beside the image such as: username, upload timestamp, and the topic */}
                            <div className='h-full align-contents-middle'>
                                <p className='text-sm h-full'>{comment.username}&nbsp;&nbsp;&nbsp;<span className='text-gray-500'>{timeAgo(comment.timestamp)}</span></p>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td></td> {/** Keep the cells below the image empty */}
                        <td className=''>{comment.comment}</td> {/** Display the first 400 characters of the body, trim it if it ends with a space, and add an ellipsis */}
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <div className='flex mt-5'>
                                {/** Up/Down voting system */}
                                <div className='flex bg-lgu-yellow w-fit p-2 rounded-full select-none'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5 cursor-pointer bg-lgu-yellow rounded-full hover:brightness-95' viewBox="0 0 24 24"
                                        fill="none" stroke="#000000" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="12" cy="12" r="10" />
                                        <path d="M16 12l-4-4-4 4M12 16V9" />
                                    </svg>
                                    <p className='text-sm mx-2'>0</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5 cursor-pointer bg-lgu-yellow rounded-full hover:brightness-95' viewBox="0 0 24 24"
                                        fill="none" stroke="#000000" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="12" cy="12" r="10" />
                                        <path d="M16 12l-4 4-4-4M12 8v7" />
                                    </svg>
                                </div>
                                {/** Comment info display */}
                                <div
                                    className='flex bg-lgu-yellow w-fit p-2 ml-10 rounded-full select-none cursor-pointer hover:brightness-95'
                                    onClick={() => setReplyBox(!replyBox)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5' viewBox="0 0 24 24"
                                        fill="none" stroke="#000000" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                                    </svg>
                                    <p className='text-sm mx-2'>Reply</p>
                                </div>
                            </div>
                            {
                                replyBox ?
                                    <div className='border-l-2 border-lgu-green mb-3 ps-3'>
                                        <div className='bg-gray-200 h-20 w-11/12 rounded-3xl mt-10'>
                                            <textarea className='w-full h-full rounded-3xl p-3'
                                                placeholder='Reply...'
                                                value={reply}
                                                onChange={(e) => setReply(e.target.value)} />
                                        </div>
                                        <div className='flex mt-3'>
                                            <div className='p-2 outline outline-2 outline-lgu-yellow rounded-full select-none cursor-pointer' onClick={() => setReplyBox(false)}>Cancel</div>
                                            <div className='p-2 ml-3 bg-lgu-yellow rounded-full select-none cursor-pointer'
                                                onClick={() => {
                                                    setReplyBox(false);
                                                    /** TODO: Save to database */
                                                }}
                                            >Comment</div>
                                        </div>
                                    </div>
                                    :
                                    null
                            }
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <div className='border-l-2 border-lgu-green'>
                                {
                                    comment.replies.map((reply, index) => {
                                        if (index < revealReplies[comment.commentID]) {
                                            return (<Reply reply={reply} key={index} className="mt-5 ml-10" />);
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
                                                    <p className='my-auto ml-2'>{comment.replies.length - revealReplies[comment.commentID]} more...</p>
                                                </div>
                                            );
                                        } else return null;
                                    })
                                }
                                {
                                    comment.replies.length < revealReplies[comment.commentID] ?
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
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
function Reply({ reply, className }) {
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
                        <td> {/** Display upload information beside the image such as: username, upload timestamp, and the topic */}
                            <div className='h-full align-contents-middle'>
                                <p className='text-sm h-full'>{reply.username}&nbsp;&nbsp;&nbsp;<span className='text-gray-500'>{timeAgo(reply.timestamp)}</span></p>
                            </div>
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
