import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

function Jinder() {
  const [jobs, setJobs] = useState(null);
  const navigate = useNavigate();
  const [showMore, setShowMore] = useState(false);

  //GET ALL JOBS
  const getJobs = async () => {
    try {
      //process.env.REACT_APP_API_URL is referring to lcoalhost 5005 locally but will be the deplpoyed link in the future
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/swipejobs`
      );
      setJobs(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getJobs();
  }, []);

  //MAKE A COPY OF THE JOB USER CLICKED
  const copyJob = async (id) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/swipejobs/${id}`
      );
      console.log(response.data);
      navigate(`/addnote/${response.data._id}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Jobs</h1>
      {jobs &&
        jobs.results.map((job) => {
          return (
            <div key={job.id}>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={job.company.logo} />
                <Card.Body>
                  <Card.Title>{job.title}</Card.Title>
                  <Card.Text>
                    <h6>
                      {showMore ? (
                        <div
                          dangerouslySetInnerHTML={{ __html: job.body }}
                          style={{
                            height: 250,
                            "overflow-y": "scroll",
                            "overflow-x": "hidden",
                            "text-align": "center",
                          }}
                        />
                      ) : (
                        `${job.body.substring(0, 250)}`
                      )}
                      <button
                        className="btn"
                        onClick={() => setShowMore(!showMore)}
                      >
                        Show more
                      </button>
                    </h6>
                  </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>{job.company.name}</ListGroup.Item>
                  <ListGroup.Item>Contact: {job.company.email}</ListGroup.Item>
                  <ListGroup.Item>Visit us: {job.company.url}</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                  <Link onClick={() => copyJob(job.id)}>Add Note</Link>
                </Card.Body>
              </Card>
            </div>
          );
        })}
    </div>
  );
}

export default Jinder;
