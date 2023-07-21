import { useState } from "react";

import styles from "./styles.module.css";

const Endpoint = ({ name, url, requestType, apiKey, token, requestBody }) => {
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const baseUrl = "http://127.0.0.1:8080";
  console.log(apiKey)
  const header = token
    ? {
        "Content-Type": "application/json",
        Accept: "application/json",
        authorization: `Bearer ${token}`,
      }
    : apiKey
    ? {
        "Content-Type": "application/json",
        Accept: "application/json",
        "x-api-key": apiKey,
      }
    : { "Content-Type": "application/json", Accept: "application/json" };

  const onSendRequest = async () => {
    if (requestType === "GET") {
      setLoading(true);
      await fetch(`${baseUrl}${url}`, {
        method: requestType,
        headers: header,
      })
        .then((response) => response.json())
        .then((data) => {
          setLoading(false);
          setResponse(data);
        })
        .catch((error) => {
          setLoading(false);
          console.log(error);
        });
    } else {
      setLoading(true);
      await fetch(`${baseUrl}${url}`, {
        method: requestType,
        headers: header,
        body: requestBody,
      })
        .then((response) => response.json())
        .then((data) => {
          setLoading(false);
          setResponse(data);
        })
        .catch((error) => {
          setLoading(false);
          console.log(error);
        });
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <p className={styles.title}>{name}</p>
        <p className={styles.url}>{url}</p>
      </div>

      <div className={styles.infoCon}>
        <p className={styles.subTitle}>
          Request type: <b>{requestType}</b>
        </p>
      </div>

      <div className={styles.infoCon}>
        <p className={styles.subTitle}>Headers: </p>
        <div className={styles.headerCon}>{JSON.stringify(header, null, 4)}</div>
      </div>

      {requestBody && (
        <div className={styles.infoCon}>
          <p className={styles.subTitle}>Body: </p>
          <p> {requestBody}</p>
        </div>
      )}

      <div className={styles.infoCon}>
        <p className={styles.subTitle}>Response: </p>
        {loading ? <div className={styles.loader} /> : JSON.stringify(response, null, 4)}
      </div>

      <div>
        <button onClick={onSendRequest} className={styles.btn}>
          Send Request
        </button>
      </div>
    </div>
  );
};

export default Endpoint;
