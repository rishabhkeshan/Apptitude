import React from "react";
import { App, Page, Section, Hero, Navbar, HorizontalSplit } from "neal-react";

function Compo() {
  return (
    <div >
    <Page>
      <Navbar brand="hello">{ /* Your nav */ }</Navbar>
      <Hero className="text-xs-center"> <h1>{ /* Content */ }</h1> </Hero>
      <Section heading="Hello!">
        <HorizontalSplit padding="md"> { /* Content */ } </HorizontalSplit>
      </Section>
      { /* More ... */ }
    </Page>
    </div>
  );
}

export default Compo;


