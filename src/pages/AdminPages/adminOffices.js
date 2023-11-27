import OfficesAdd from '../../components/AdminOfficesAdd';
import Offices_Add from '../lgu_sv_access/Offices_Add';


function AdminOffices() {
  return (
    <div className="ml-10 mt-6 mb-6 w-full flex-shrink-0 h-screen overflow-auto border-2 border-gray-500 rounded shadow-lg">
      {/* Use the imported component*/}
      <Offices_Add />
    </div>
  );
}

export default AdminOffices;
