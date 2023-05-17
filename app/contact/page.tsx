"use client"

import Contact from "@/components/Contact"
import Section from "@/components/ui/Section";
import Wrapper from "@/components/ui/Wrapper";
import Layout from "@/components/ui/Layout";

export default function page() {
  return (
    <Layout>
      <Section>
        <Wrapper gridWidth={2}>
          <Contact.Text />
          <Contact />
        </Wrapper>
      </Section>
    </Layout>
  )
}