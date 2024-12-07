import { 
  Tailwind,
  Html, 
  Head, 
  Heading, 
  Preview, 
  Body, 
  Container, 
  Text, 
  Link } from "@react-email/components";

export default function ConfirmationEmail({link}: {link: string}) {
  return (
    <Tailwind>
        <Html lang="en">
            <Head />
            <Preview>Confirm your email address</Preview>
            <Body className="font-sans">
              <Container>
                <Heading className="text-2xl"> You are almost there. </Heading>
                <Text className="">Please click the link below to confirm your email address.</Text>
                <Text className="bg-gray-200 text—center px—4 py—2"> 
                  {link}
                </Text>
              </Container>
            </Body>
        </Html>
    </Tailwind>
  );
}
