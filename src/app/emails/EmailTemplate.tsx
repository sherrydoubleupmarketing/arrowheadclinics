import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Tailwind,
  Text,
} from "@react-email/components";
import * as React from "react";
import image from "../../../public/Bannerthree.webp";

type MessageUsEmailProps = {
  name: string;
  email: string;
  message: string;
};

const EmailTemplate = ({ name, email, message }: MessageUsEmailProps) => {
  const previewText = `Weekly Updates 🚀${name} sent you a message.`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans">
          <Container className="my-[20px] mx-auto p-[20px] max-w-4xl">
            <div className="w-full bg-red-700 flex flex-col items-center justify-center">
              <h1 className="text-3xl text-bold text-white">ATLANTA</h1>
              <h1 className="text-5xl text-bold text-white">HAPPENS</h1>
            </div>
            <div className="h-96 bg-black w-[90%] m-auto mt-5">
              <div className="w-[80%] m-auto flex flex-col gap-5">
                <p className="text-white mt-12">Hasnain Ahmad</p>
                <hr className="border border-slate-700 w-full -mt-7"></hr>{" "}
                <p className="text-white">(000) 987 - 876</p>
                <hr className="border border-slate-700 w-full -mt-7"></hr>{" "}
                <p className="text-white">doubleupmarketing@gmail.com</p>
                <hr className="border border-slate-700 w-full -mt-7"></hr>{" "}
                <p className="text-white">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam
                  omnis aliquam quaerat libero unde cum saepe nemo nisi labore?
                  Ipsam voluptas temporibus amet quisquam nisi fugiat molestiae
                  magni enim maxime.
                </p>
                <hr className="border border-slate-700 w-full -mt-7"></hr>
              </div>
            </div>

            <div className="mt-5 flex items-center justify-center">
              <img
                src="https://atlantahappens.vercel.app/_next/image?url=%2FBannertwo.png&w=2048&q=75"
                alt="Banner image"
                style={{ width: "auto", height: "100px" }}
              />
            </div>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default EmailTemplate;
