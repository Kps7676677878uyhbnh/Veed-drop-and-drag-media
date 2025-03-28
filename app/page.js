"use client";

import { MantineProvider, Container, Title } from "@mantine/core";
import Canvas from "../components/Canvas";  // Import Canvas component

export default function HomePage() {
  return (
    <MantineProvider>
      <Container size="md" pt={30}>
        <Title align="center" mb="xl">Drag & Drop Media to Canvas</Title>
        <Canvas />
      </Container>
    </MantineProvider>
  );
}
