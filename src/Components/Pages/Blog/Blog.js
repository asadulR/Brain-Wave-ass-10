import React from 'react';
import { Accordion } from 'react-bootstrap';

const Blog = () => {
    return (
        <div className='container my-5 '>
            <h2 className='text-center py-5 fw-bold'>Expert's Question and Answer</h2>
            <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0">
                    <Accordion.Header> <h4>Difference between authorization and authentication:</h4> </Accordion.Header>
                    <Accordion.Body>
                        Both the terms are often used in conjunction with each other in terms of security, especially when it comes to gaining access to the system. Both are very crucial topics often associated with the web as key pieces of its service infrastructure. However, both the terms are very different with totally different concepts. While it’s true that they are often used in the same context with the same tool, they are completely distinct from each other.
                        Authentication means confirming your own identity, while authorization means granting access to the system. In simple terms, authentication is the process of verifying who you are, while authorization is the process of verifying what you have access to.
                        Authentication is about validating your credentials like User Name/User ID and password to verify your identity.
                        Authorization, on the other hand, occurs after your identity is successfully authenticated by the system, which ultimately gives you full permission to access the resources such as information, files, databases, funds, locations, almost anything.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header> <h4>Why are you using firebase? What other options do you have to implement authentication?</h4></Accordion.Header>
                    <Accordion.Body>
                        Google Firebase offers many features that pitch it as the go-to backend development tool for web and mobile apps. It reduces development workload and time. And it's a perfect prototyping tool. Firebase is simple, lightweight, friendly, and industrially recognized. That's why I love to use it.
                        <br />
                        <br />
                        <h5>There are some alternatives to firebase authentication:</h5>

                        1. Auth0
                        2. Passport
                        3. Amazon Cognito
                        4. KeyCloak
                        5. Backendless
                        6. Okta
                        7. OneLogin
                        8. Authress
                        9. Frontegg
                        10. Stytch
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header> <h4>What other services does firebase provide other than authentication?</h4></Accordion.Header>
                    <Accordion.Body>
                        Interestingly, the Firebase platform is multifaceted, offering build tools and APIs around database management, authentication, push notifications, cloud hosting, and more.
                        <h4>Some of its key features below:</h4>
                        <h4>1. Storage</h4>
                        Google Firebase uses dedicated cloud-based NoSQL databases, Firestore, and a real-time database, to store information.
                        <h4>2. Hosting</h4>
                        You can also host your web app easily on Firebase. Offering microservices, Firebase lets you host and deploy your web app rapidly with a few commands.

                        <h4>3. Firebase ML</h4>
                        Firebase ML comes in handy if you have a machine learning project to deploy along with your app. Firebase offers machine learning capabilities for training models.

                        <h4>4. Built-In Push Notifications</h4>
                        Coding and implementing push notifications can be arduous. Firebase's built-in push notification lets you add personalized and real-time alert capabilities to your app without writing a separate script from scratch.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Blog;