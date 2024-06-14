import { Body, Head, Html } from "@react-email/components";
import * as React from "react";

type MessageUsEmailProps = {
  name: string;
  email: string;
  message: string;
  phone: string;
};

const EmailTemplate = ({
  name,
  email,
  message,
  phone,
}: MessageUsEmailProps) => {
  const previewText = `Weekly Updates 🚀${name} sent you a message.`;

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
        <table width="100%" border="0" cellspacing="0" cellpadding="0">
          <tr>
            <td
              style={{
                backgroundColor: "#dc2626",
                textAlign: "center",
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
              <h2
                style={{
                  color: "white",
                  fontSize: "48px",
                  fontWeight: "bold",
                  margin: "0",
                }}
              >
                HAPPENS
              </h2>
            </td>
          </tr>
          <tr style={{ marginTop: "20px", width: "80%" }}>
            <td
              style={{
                backgroundColor: "black",
                padding: "20px",
                marginTop: "20px",
              }}
            >
              <table width="80%" cellpadding="10" align="center">
                <tr>
                  <td
                    style={{
                      color: "white",
                      fontSize: "16px",
                      paddingTop: "20px",
                      paddingBottom: "0",
                    }}
                  >
                    {name}
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      borderTop: "1px solid #374151",
                      marginTop: "0",
                      marginBottom: "0",
                    }}
                  ></td>
                </tr>
                <tr>
                  <td
                    style={{
                      color: "white",
                      fontSize: "16px",
                      paddingTop: "20px",
                    }}
                  >
                    {phone}
                  </td>
                </tr>
                <tr>
                  <td style={{ borderTop: "1px solid #374151" }}></td>
                </tr>
                <tr>
                  <td
                    style={{
                      color: "white",
                      fontSize: "16px",
                      paddingTop: "20px",
                    }}
                  >
                    {email}
                  </td>
                </tr>
                <tr>
                  <td style={{ borderTop: "1px solid #374151" }}></td>
                </tr>
                <tr>
                  <td
                    style={{
                      color: "white",
                      fontSize: "16px",
                      paddingTop: "20px",
                    }}
                  >
                    {message}
                  </td>
                </tr>
                <tr>
                  <td style={{ borderTop: "1px solid #374151" }}></td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style={{ textAlign: "center", paddingTop: "20px" }}>
              <img
                src="https://atlantahappens.vercel.app/wilsonlogo.png"
                alt="Banner image"
                style={{ height: "100px", width: "auto" }}
              />
            </td>
          </tr>
        </table>
      </Body>
    </Html>
  );
};

export default EmailTemplate;
