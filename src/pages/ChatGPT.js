import { useState } from "react";
// material-ui
import { useTheme } from "@mui/material/styles";
import {
  Avatar,
  Grid,
  Paper,
  Stack,
  Table,
  TableBody,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";

import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SendIcon from "@mui/icons-material/Send";

// action imports
import styled from "@emotion/styled";
// action imports
import { getChatText } from "api/chatGPT";
import { moveScroll } from "utils/scroll";
// ==============================|| ChatGPT part ||============================== //

const ChatGPT = () => {
  const theme = useTheme();
  const [totalMessage, setTotalMessage] = useState([]);
  const [message, setMessage] = useState("");

  const messageKeyDown = (e) => {
    if (e.keyCode === 13) {
      if (message != "") {
        sendMessage();
      }
    }
  };

  const sendMessage = async () => {
    if (message === "") return;
    setMessage("");
    setTotalMessage((prev) => {
      return [...prev, { type: "me", message }];
    });
    moveScroll("");
    const { data } = await getChatText(message);
    console.log(data,"=============.data");
    setTotalMessage((prev) => {
      return [...prev, { type: "ai", message: data.text }];
    });
    moveScroll("");
  };

  const StyledTableRow = styled(TableRow)(() => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));
  return (
    <Grid container spacing={1}>
      <Grid item xs={12} lg={12} md={12}>
        <Paper
          sx={{
            width: "100%",
            p: theme.breakpoints.down("sm") ? 0 : 5,
            height: "100vh",
            position: "relative",
          }}
        >
          <TableContainer
            component={Paper}
            id="chat-box"
            sx={{ height: "100vh" }}
          >
            <Table aria-label="customized table">
              <TableBody
                sx={{
                  width: "100%",
                  height: "75vh",
                  overflow: "auto",
                  display: "contents",
                }}
              >
                {totalMessage.map((item, i) => {
                  if (item.type === "me") {
                    return (
                      <StyledTableRow key={i}>
                        <Stack direction={"row"} padding={5} spacing={2}>
                          <Avatar alt="User" />
                          <Typography marginTop={"10px !important"}>
                            {item.message}
                          </Typography>
                        </Stack>
                      </StyledTableRow>
                    );
                  } else {
                    return (
                      <StyledTableRow key={i}>
                        <Stack direction={"row"} padding={5} spacing={2}>
                          <Avatar src="/assets/images/logo_chat.png" alt="AI" />
                          <Typography marginTop={"10px !important"}>
                            {item.message}
                          </Typography>
                        </Stack>
                      </StyledTableRow>
                    );
                  }
                })}
                {totalMessage.length == 0 && (
                  <StyledTableRow>
                    <Stack direction={"row"} padding={5} spacing={2}>
                      <Avatar src="/assets/images/logo_chat.png" alt="AI" />
                      <Typography marginTop={"10px !important"}>
                        Enter your message to start a chat. This could be a
                        question, a statement, or any other text.
                      </Typography>
                    </Stack>
                  </StyledTableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>

          <Paper
            elevation={3}
            sx={{
              p: "2px 2px",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              position: "absolute",
              bottom: "3px",
              width: "100%",
              boxShadow:
                "11px 11px 7px -1px rgb(0 0 0 / 72%), 0px 1px 1px 0px rgb(0 0 0 / 72%), 0px 1px 3px 0px rgb(0 0 0 / 76%)",
            }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Please input the text."
              inputProps={{ "aria-label": "search google maps" }}
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              onKeyDown={messageKeyDown}
            />
            <IconButton
              type="button"
              sx={{ p: "10px" }}
              onClick={sendMessage}
              aria-label="search"
            >
              <SendIcon />
            </IconButton>
          </Paper>
        </Paper>
      </Grid>
    </Grid>
  );
};
ChatGPT.Layout = "authGuard";
export default ChatGPT;
