// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {lazy} from "react";
import { Provider } from 'react-redux';
import Store, { persistor } from './redux/Store';
import LazySuspense from './components/LazySuspense';
const Lazylogin = lazy(()=> import ("./pages/auth/login"));
const Lazyregister = lazy(()=> import ("./pages/auth/register"));
const Lazyforgetpass = lazy(()=> import ("./pages/auth/forgetpassword"));
const Lazyhome = lazy(()=> import ("./pages/user/home"));
const Lazyinstitute = lazy(()=> import ("./pages/user/institutes"));
const Lazycourses = lazy(()=> import ("./pages/user/courses"));
const Lazyenroll = lazy(()=> import ("./pages/user/enrol"));
const Lazystudent = lazy(()=> import ("./pages/user/student"));
const Lazyprofile = lazy(()=> import ("./pages/user/profileupdate"));
const Lazyadmissiondialoge = lazy(()=> import ("./pages/user/admissiondialog"));
const Lazypayment = lazy(()=> import ("./pages/user/payment"));
const Lazypaymenthistory = lazy(()=> import ("./pages/user/paymenthistory"));
const Lazyfaq = lazy(()=> import ("./pages/user/faq"));
const LazyAdminhome = lazy(()=> import ("./pages/admin/admindash"));
const LazyAdstudent = lazy(()=> import ("./pages/admin/StudentProfile"));
const LazyAdinstitute = lazy(()=> import ("./pages/admin/AddInstitutions"));
const LazyAdcourse= lazy(()=> import ("./pages/admin/Addcourse"));
const LazyAdpayment= lazy(()=> import ("./pages/admin/PaymentDetails"));
const LazyAdlogin= lazy(()=> import ("./pages/auth/adminlogin"));


import { Navigate,Route,Routes } from 'react-router';

const UserRoutes=()=>{
  return(
    <LazyUserMain>
      <Routes>
        <Route path="/home" element={<LazySuspense component={Lazyhome}/>}/>
      </Routes>
    </LazyUserMain>
  )
}
const AdminRoutes=()=>{
  return(
    <LazyAdminMain>
      <Routes>
        <Route path="/admin/home" element={<LazySuspense component={LazyAdminhome}/>}/>
      </Routes>
    </LazyAdminMain>
  )
}

function App() {

  return (
    <Provider store={Store}>
    <Routes>
      <Route exact path="/" element={<Navigate to="/user/login" />}/>
      <Route path="/user/login" element={<LazySuspense component={Lazylogin}/>}/>
      <Route path="/user/register" element={<LazySuspense component={Lazyregister}/>}/>
      <Route path="/user/forgetpassword" element={<LazySuspense component={Lazyforgetpass}/>}/>
      <Route path="/user/home" element={<LazySuspense component={Lazyhome}/>}/>
      <Route path="/user/institutes" element={<LazySuspense component={Lazyinstitute}/>}/>
      <Route path="/user/courses" element={<LazySuspense component={Lazycourses}/>}/>
      <Route path="/user/enroll" element={<LazySuspense component={Lazyenroll}/>}/>
      <Route path="/user/student" element={<LazySuspense component={Lazystudent}/>}/>
      <Route path="/user/profileupdate" element={<LazySuspense component={Lazyprofile}/>}/>
      <Route path="/user/admissiondialog" element={<LazySuspense component={Lazyadmissiondialoge}/>}/>
      <Route path="/user/payment" element={<LazySuspense component={Lazypayment}/>}/>
      <Route path="/user/paymenthistory" element={<LazySuspense component={Lazypaymenthistory}/>}/>
      <Route path="/user/faq" element={<LazySuspense component={Lazyfaq}/>}/>
      <Route path="/admin/student" element={<LazySuspense component={LazyAdstudent}/>}/>
      <Route path="/admin/addinstitutions" element={<LazySuspense component={LazyAdinstitute}/>}/>
      <Route path="/admin/addcourse" element={<LazySuspense component={LazyAdcourse}/>}/>
      <Route path="/admin/PaymentDetails" element={<LazySuspense component={LazyAdpayment}/>}/>
      <Route path="/admin/home" element={<LazySuspense component={LazyAdminhome}/>}/>
      <Route path="/admin/login" element={<LazySuspense component={LazyAdlogin}/>}/>
    </Routes>
    </Provider>
  )
}

export default App;
