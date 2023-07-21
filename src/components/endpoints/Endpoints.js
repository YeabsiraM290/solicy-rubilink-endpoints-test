import Endpoint from "../endpoint/endpoint";

import styles from "./styles.module.css";

const Endpoints = () => {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.col}>
          <p className={styles.title}>Lapis KYC User Endpoints (Dashboard)</p>

          <p className={styles.subtitle}>Authentication</p>
          <div>
            <Endpoint
              name={"Signup"}
              url={"/auth/register"}
              requestType={"POST"}
              requestBody={JSON.stringify(
                {
                  username: "ttUser",
                  email: "Testtser@gmail.com",
                  phoneNumber: "251298149901",
                  password: "sdfdgd12fdfg@H",
                },
                null,
                4
              )}
            />
          </div>
          <div>
            <Endpoint
              name={"Login"}
              url={"/auth/login"}
              requestType={"POST"}
              requestBody={JSON.stringify(
                {
                  username: "ttUser",
                  password: "sdfdgd12fdfg@H",
                },
                null,
                4
              )}
            />
          </div>
          <div>
            <Endpoint
              name={"Veirfy JWT Token"}
              url={"/auth/token"}
              requestType={"GET"}
              token={
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFlZGRjOTYxLTI2YmYtNDc2ZC05MWRiLTkzMmJhNDhjNWEzYSIsImlhdCI6MTY4OTk0Mjg0NiwiZXhwIjoxNzc2MzQyODQ2fQ.qCKpOyegIG3_rE_Wu1tq7a6v-VCGrvRpTkXvOBmGABU"
              }
            />
          </div>
          <div>
            <Endpoint
              name={"Get API key"}
              url={"/users/apikey"}
              requestType={"GET"}
              token={
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFlZGRjOTYxLTI2YmYtNDc2ZC05MWRiLTkzMmJhNDhjNWEzYSIsImlhdCI6MTY4OTk0Mjg0NiwiZXhwIjoxNzc2MzQyODQ2fQ.qCKpOyegIG3_rE_Wu1tq7a6v-VCGrvRpTkXvOBmGABU"
              }
            />
          </div>
          <div>
            <Endpoint
              name={"generate New API Key"}
              url={"/users/newkey"}
              requestType={"GET"}
              token={
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc2MWY3OGUzLWU4ZDQtNDRlZC04NGUyLWJkNWY5MTQzY2EyNiIsImlhdCI6MTY4OTk1Mjc4MCwiZXhwIjoxNzc2MzUyNzgwfQ.va_VtjsL0YuPCQFaN-QQCKQsdrrqIqr74b-ZKhm9d60"
              }
            />
          </div>
          <p className={styles.subtitle}>KYC Requests</p>
          <div>
            <Endpoint
              name={"Get Accepted KYC Requests"}
              url={"/api/requests?accepted=true"}
              requestType={"GET"}
              token={
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFlZGRjOTYxLTI2YmYtNDc2ZC05MWRiLTkzMmJhNDhjNWEzYSIsImlhdCI6MTY4OTk0Mjg0NiwiZXhwIjoxNzc2MzQyODQ2fQ.qCKpOyegIG3_rE_Wu1tq7a6v-VCGrvRpTkXvOBmGABU"
              }
            />
          </div>
          {/* <div>
            <Endpoint
              name={"Get Pending KYC Requests"}
              url={"/api/requests?accepted=false"}
              requestType={"GET"}
              t
              token={
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImU1ZDYyNDAzLTk0NWQtNGY5My1hMGJkLTA1NThiYzY0M2RmMiIsImlhdCI6MTY4Nzg2NzYwOCwiZXhwIjoxNzc0MjY3NjA4fQ.dRg-vRyQAV1Txc4duRbvxLgq3MyVFTL7xVMF96ODzwM"
              }
            />
          </div> */}
          <div>
            <Endpoint
              name={"Accept KYC Request"}
              url={"/api/accept"}
              requestType={"PUT"}
              requestBody={JSON.stringify(
                {
                  id: "a041ba17-4088-4c69-8411-68d5b552eedb",
                },
                null,
                4
              )}
              token={
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFlZGRjOTYxLTI2YmYtNDc2ZC05MWRiLTkzMmJhNDhjNWEzYSIsImlhdCI6MTY4OTk0Mjg0NiwiZXhwIjoxNzc2MzQyODQ2fQ.qCKpOyegIG3_rE_Wu1tq7a6v-VCGrvRpTkXvOBmGABU"
              }
            />
          </div>
        </div>
        <div className={styles.col}>
          <p className={styles.title}>KYC endpoints</p>
          <p className={styles.subtitle}>KYC Session</p>
          <div>
            <Endpoint
              name={"Upload And Verify Document"}
              url={"/api/document-authentication"}
              requestType={"POST"}
              requestBody={JSON.stringify(
                {
                  frontImage:
                    "https://res.cloudinary.com/zabsiram/image/upload/v1684898150/ugidxxnwsbppr3avky7g.jpg",
                  backImage:
                    "https://res.cloudinary.com/zabsiram/image/upload/v1684898151/jfeezjjxpajqmrjuuyti.jpg",
                  sideImage:
                    "https://res.cloudinary.com/zabsiram/image/upload/v1686925377/qx0hg3jwxtfzuqiixajn.jpg",
                },
                null,
                4
              )}
              apiKey={"2d7b5edcd25f4065962089b2f77de95e"}
            />
          </div>
          <div>
            <Endpoint
              name={"Upload And Verify Face Image"}
              url={"/api/face-authentication"}
              requestType={"POST"}
              requestBody={JSON.stringify(
                {
                  faceImage:
                    "https://res.cloudinary.com/zabsiram/image/upload/v1684898154/wkoqzmjz76gmg5zmfhjo.jpg",
                  documentIdentificationId:
                    "c5f268fa-3625-4959-ba80-752da7043f1e",
                },
                null,
                4
              )}
              apiKey={"2d7b5edcd25f4065962089b2f77de95e"}
            />
          </div>

          <div>
            <Endpoint
              name={"Create A KYC Request"}
              url={"/api/kyc-request"}
              requestType={"POST"}
              requestBody={JSON.stringify(
                {
                  email: "example@outlook.com",
                  phoneNumber: "25199967835",
                  documentIdentificationId:
                    "c5f268fa-3625-4959-ba80-752da7043f1e",
                },
                null,
                4
              )}
              apiKey={"2d7b5edcd25f4065962089b2f77de95e"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Endpoints;
