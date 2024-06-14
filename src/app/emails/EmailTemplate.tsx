import { Body, Head, Html } from "@react-email/components";
import * as React from "react";

type MessageUsEmailProps = {
  name: string;
  email: string;
  message: string;
};

const EmailTemplate = ({ name, email, message }: MessageUsEmailProps) => {
  return (
    <Html>
      <Head />
      <Body
        style={{
          backgroundColor: "white",
          fontFamily: "sans-serif",
          margin: "auto",
          maxWidth: "1024px",
          padding: "20px",
        }}
      >
        <div
          style={{
            backgroundColor: "#dc2626",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px 0",
          }}
        >
          <h1
            style={{
              color: "white",
              fontSize: "36px",
              fontWeight: "bold",
              margin: "0",
            }}
          >
            ATLANTA
          </h1>
          <h1
            style={{
              color: "white",
              fontSize: "48px",
              fontWeight: "bold",
              margin: "0",
            }}
          >
            HAPPENS
          </h1>
        </div>
        <div
          style={{
            backgroundColor: "black",
            height: "384px",
            width: "90%",
            margin: "20px auto 0 auto",
          }}
        >
          <div
            style={{
              width: "80%",
              margin: "auto",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <p style={{ color: "white", marginTop: "48px", marginBottom: "0" }}>
              Hasnain Ahmad
            </p>
            <hr
              style={{
                borderTop: "1px solid #374151",
                width: "100%",
                marginTop: "0",
                marginBottom: "0",
              }}
            />
            <p style={{ color: "white", marginTop: "0", marginBottom: "0" }}>
              (000) 987 - 876
            </p>
            <hr
              style={{
                borderTop: "1px solid #374151",
                width: "100%",
                marginTop: "0",
                marginBottom: "0",
              }}
            />
            <p style={{ color: "white", marginTop: "0", marginBottom: "0" }}>
              doubleupmarketing@gmail.com
            </p>
            <hr
              style={{
                borderTop: "1px solid #374151",
                width: "100%",
                marginTop: "0",
                marginBottom: "0",
              }}
            />
            <p style={{ color: "white", marginTop: "0", marginBottom: "0" }}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam
              omnis aliquam quaerat libero unde cum saepe nemo nisi labore?
              Ipsam voluptas temporibus amet quisquam nisi fugiat molestiae
              magni enim maxime.
            </p>
            <hr
              style={{
                borderTop: "1px solid #374151",
                width: "100%",
                marginTop: "0",
                marginBottom: "0",
              }}
            />
          </div>
        </div>
        <div
          style={{
            marginTop: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src="https://atlantahappens.vercel.app/_next/image?url=%2FBannertwo.png&w=2048&q=75"
            alt="Banner image"
            style={{ height: "100px", width: "auto" }}
          />
        </div>
      </Body>
    </Html>
  );
};

export default EmailTemplate;
