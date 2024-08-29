import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import PageLoader from "../components/Loader/PageLoader";



const AllRoutes = () => {
  const Home = lazy(() => import("../pages/home/Home"));
  const CreateProposal = lazy(() =>
    import("../pages/create-proposal/CreateProposal")
  );
  const HomeLayout = lazy (() => import("../layout/HomeLayout"));
  const SubmitProposal = lazy(() =>
    import("../pages/create-proposal/SubmitProposal")
  );
  const Login = lazy(() => import("../pages/create-proposal/login"));
  const Aboutus = lazy(() => import("../pages/about-us/Aboutus"));
  const ProjectDetails = lazy(() =>
    import("../pages/projectdetail/ProjectDetails")
  );
  const StudentProjectDetails = lazy(() =>
    import("../pages/projectdetail/StudentProjectDetails")
  );
  const Fund = lazy(() =>
    import("../components/modal/FundingSuccess")
  );
  const Proposals = lazy(() =>
  import("../components/proposal/Proposal")
);
const CreateCommunity = lazy(()=> import("../pages/create-community/CreateCommunity"));

const CommunityLayout = lazy(()=> import("../layout/CommunityLayout"));
const Dashboard = lazy(()=> import("../pages/dashboard/Dashboard"));




  return (
    <div>
      <Toaster />
      <Suspense fallback={<PageLoader />}>
        <BrowserRouter>
          
            <Routes>
              <Route path="/" element={<HomeLayout />} >
              <Route index element={<Home />} />
              <Route path="/create-proposal" element={<CreateProposal />} />
              <Route path="/submit-proposal" element={<SubmitProposal />} />
              <Route path="/login" element={<Login />} />
              <Route path="/about-us" element={<Aboutus />} />
              <Route path="/fund/:id" element={<ProjectDetails />} />
              <Route path="/fund-modal/:id" element={<Fund />} />
              <Route path="/proposals" elements={<Proposals/>}/>
              <Route
                path="/student-details"
                element={<StudentProjectDetails />}
              />
              <Route path='/create-community' element={<CreateCommunity/>}/>
              </Route>
              <Route path="/dashboard" element={<CommunityLayout />} >
              <Route index element ={<Dashboard/>}/>
              </Route>

             
            </Routes>
          
        </BrowserRouter>
      </Suspense>
    </div>
  );
};

export default AllRoutes;