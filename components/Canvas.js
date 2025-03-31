"use client";

import React, { useState } from "react";
import { Dropzone } from "@mantine/dropzone";
import { Image, Button, Stack, Text, Container } from "@mantine/core";

const Canvas = () => {
  const [media, setMedia] = useState(null);  // State to hold uploaded media

  // Handle file drop
  const handleDrop = (files) => {
    const file = files[0];
    const url = URL.createObjectURL(file);  // Create a preview URL
    setMedia({ url, type: file.type });    // Store media details in state
  };

  return (
    <Container size="lg" style={{ padding: "20px" }}>
      <Dropzone
        onDrop={handleDrop}        
        onReject={() => console.log("File rejected")}
        accept={['image/*', 'video/*']}   // Accept images and videos
        maxSize={5 * 1024 ** 2}          // Max size: 5MB
        style={{ width: "100%", minHeight: 200, border: "2px dashed #ccc" }}
      >
        {/* <Text align="center">Drag & drop or click to upload media</Text> */}
        <Text align="center">Drag & drop or click to upload Image OR Video under 5mb.</Text>
      </Dropzone>

      {media && (
        <Stack spacing="md" align="center" mt="md">
          <div style={{ width: "100%", height: "400px", overflow: "hidden" }}>
            {media.type.startsWith("image") ? (
              <Image src={media.url} alt="Uploaded" fit="contain" />
            ) : (
              <video src={media.url} controls style={{ width: "100%", height: "100%" }} />
            )}
          </div>

          <Button color="red" onClick={() => setMedia(null)}>
            Remove Media
          </Button>
        </Stack>
      )}
    </Container>
  );
};

export default Canvas;
