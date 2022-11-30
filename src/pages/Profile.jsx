import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { AuthContext } from "../contexts/auth.context";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";
import photo from "../images/profile.png";

function Profile() {
  const [currentUser, setCurrentUser] = useState({});
  const { user } = useContext(AuthContext);

  const getUser = async () => {
    try {
      const storedToken = localStorage.getItem("authToken");
      let response = await axios.get(
        `${process.env.REACT_APP_API_URL}/profile/${user._id}`,
        {
          headers: { Authorization: `Bearer ${storedToken}` },
        }
      );

      setCurrentUser(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUser();
  }, [user]);

  return (
    <div className="profilePage">
      {/* <header>
        <h1>Olá</h1>

        <h1 class="tag name">
          Welcome to your profile, {currentUser.firstName}{" "}
          {currentUser.lastName}
        </h1>
        <p class="tag location">location {currentUser.location}</p>
        <p class="tag location">description {currentUser.description}</p>

        <Link class="tag-name" to={`/profile/edit/${currentUser._id}`}>
          Edit Account
        </Link>
      </header> */}
      <div className="vh-100" style={{ backgroundColor: "#9de2ff" }}>
        <MDBContainer>
          <MDBRow className="justify-content-center">
            <MDBCol md="9" lg="7" xl="5" className="mt-5">
              <MDBCard style={{ borderRadius: "15px" }}>
                <MDBCardBody className="p-4">
                  <div className="d-flex text-black">
                    <div className="flex-shrink-0">
                      <MDBCardImage
                        style={{ width: "180px", borderRadius: "10px" }}
                        src={photo}
                        alt="Generic placeholder image"
                        fluid
                      />
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <MDBCardTitle>
                        {currentUser.firstName} {currentUser.lastName}
                      </MDBCardTitle>
                      <MDBCardText>FullStack Developer</MDBCardText>

                      <div
                        className="d-flex justify-content-start rounded-3 p-2 mb-2"
                        style={{ backgroundColor: "#efefef" }}
                      >
                        <div>
                          <p className="small text-muted mb-1">Notes</p>
                          <p className="mb-0">41</p>
                        </div>
                        <div className="px-3">
                          <p className="small text-muted mb-1">Favorite Jobs</p>
                          <p className="mb-0">976</p>
                        </div>
                      </div>
                      <div className="d-flex pt-1">
                        <Link outline className="me-1 flex-grow-1">
                          Edit Profile
                        </Link>
                        <Link className="flex-grow-1">Logout</Link>
                      </div>
                    </div>
                  </div>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    </div>
  );
}

export default Profile;
