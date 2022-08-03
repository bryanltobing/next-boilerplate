import {
  Box,
  useTheme,
  Container,
  Typography,
  Link as LinkMui,
} from "@mui/material";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import type { NextPage } from "next";
import { useRouter } from "next/router";

import { useGetPostQuery } from "@ReduxModules";

import { env } from "@Definitions";

const PostDetailsPage: NextPage = () => {
  const router = useRouter();

  const { id = "" } = router.query as { id?: string };

  const { data: post, isLoading } = useGetPostQuery(
    {
      id,
    },
    {
      skip: !id,
    }
  );

  const theme = useTheme();

  return (
    <Container>
      <Head>
        <title>Create Next App</title>
      </Head>

      <Box
        minHeight="100vh"
        py={8}
        flex={1}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Typography variant="h1" textAlign="center">
          Welcome to{" "}
          <LinkMui href="https://nextjs.org" underline="hover">
            Next.js!
          </LinkMui>
        </Typography>

        <Typography
          sx={{ my: 8 }}
          variant="h2"
          fontWeight={400}
          textAlign="center"
        >
          Get started by editing
          <Box
            component="code"
            sx={{ backgroundColor: "grey.50" }}
            borderRadius={0.8}
            p={1.5}
            fontSize={theme.typography.pxToRem(17.6)}
            fontFamily="Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace"
          >
            pages/index.tsx
          </Box>
        </Typography>

        <Typography>
          {isLoading ? "Loading post" : "Post loaded"} from{" "}
          {`${env.NEXT_PUBLIC_API_URL}/posts/${id}`}
        </Typography>

        {post && (
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexWrap="wrap"
            maxWidth={800}
            width={{ xs: "100%", sm: undefined }}
            flexDirection={{ xs: "column", sm: "row" }}
          >
            <Link key={post.id} href={`/posts/${post.id}`} passHref>
              <Box
                component="a"
                target="_blank"
                rel="noreferrer"
                margin={2}
                padding={3}
                textAlign="left"
                color="inherit"
                sx={{
                  textDecoration: "none",
                  transition: "color 0.15s ease, border-color 0.15s ease",
                  ":hover, :focus, :active": {
                    color: "primary.main",
                    borderColor: "primary.main",
                  },
                }}
                border={1}
                borderColor="primary.border"
                borderRadius={2.5}
                maxWidth={300}
              >
                <Typography variant="h2" sx={{ mb: 2 }}>
                  {post.title} &rarr;
                </Typography>
                <Typography variant="body1">{post.body}.</Typography>
              </Box>
            </Link>
          </Box>
        )}
      </Box>

      <Box
        component="footer"
        display="flex"
        flex={1}
        py={4}
        borderTop="1"
        borderColor="primary.border"
        justifyContent="center"
        alignItems="center"
      >
        <LinkMui
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          color="text.primary"
          underline="none"
        >
          Powered by{" "}
          <Box component="span" height="1em" ml={1}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </Box>
        </LinkMui>
      </Box>
    </Container>
  );
};

export default PostDetailsPage;
