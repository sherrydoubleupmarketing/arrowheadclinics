import { Body, Head, Html } from "@react-email/components";
import * as React from "react";

type MessageUsEmailProps = {
  name: string;
  email: string;
  message: string;
  phone: string;
  validity: string;
};

const EmailTemplate = ({
  name,
  email,
  message,
  phone,
  validity,
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
        <table width="80%">
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
          <tr>
            <td style={{ padding: "0" }}>
              {/* Nested table for "margins" */}
              <table width="100%">
                <tr>
                  <td style={{ backgroundColor: "black", padding: "20px" }}>
                    <table width="100%">
                      {validity === "Spam" && (
                        <tr>
                          <td
                            style={{
                              color: "red",
                              fontSize: "16px",
                              paddingTop: "20px",
                              paddingBottom: "0",
                            }}
                          >
                            <img
                              src="https://doubleupmarketing.vercel.app/warn.png"
                              alt="Spam"
                            />
                            This Email Could Be A Spam
                          </td>
                        </tr>
                      )}

                      <tr>
                        <td
                          style={{
                            color: "white",
                            fontSize: "16px",
                            paddingTop: "20px",
                            paddingBottom: "0",
                          }}
                        >
                          Name: {name}
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
                          Phone: {phone}
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
                          Email: {email}
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
                          Message: {message}
                        </td>
                      </tr>
                      <tr>
                        <td style={{ borderTop: "1px solid #374151" }}></td>
                      </tr>
                    </table>
                  </td>
                  {/* <td style={{ width: "10%" }}></td>  */}
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
