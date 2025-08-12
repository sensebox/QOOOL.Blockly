import React from "react";
import { useSelector } from "react-redux";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Slide,
  Tab,
} from "@mui/material";
import ReactMarkdown from "react-markdown";
import * as Blockly from "blockly";
import GraphViewer from "./GraphViewer";
import DebugViewer from "./DebugViewer";
import TabPanel from "@mui/lab/TabPanel";
import TabContext from "@mui/lab/TabContext";
import { TabList } from "@mui/lab";

// ———————————————————————————————————————
// Styles (kept in one place to avoid repetition)
// ———————————————————————————————————————
const cardSx = {
  height: "100%",
  overflowY: "auto",
  boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
  borderRadius: "5px",
  border: "1px solid #ddd",
  background: "#fff",
  display: "flex",
  flexDirection: "column",
  justifyContent: "stretch",
};

const tabListSx = {
  minHeight: 36,
  "& .MuiTabs-flexContainer": { gap: 0.5 },
  "& .MuiTab-root": {
    minHeight: 36,
    padding: "6px 10px",
    textTransform: "none",
    fontSize: 13,
    fontWeight: 500,
    borderRadius: 1,
    color: "text.secondary",
  },
  "& .MuiTab-root.Mui-selected": (theme) => ({
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.action.selected,
    boxShadow: `inset 0 -2px 0 ${theme.palette.primary.main}`,
  }),
};

// ———————————————————————————————————————
// Small reusable building blocks
// ———————————————————————————————————————
const UnderlinedTitle = ({ children }) => (
  <Typography
    variant="h6"
    component="h2"
    sx={{ mb: 0.5, position: "relative", pb: 0.3 }}
  >
    <span style={{ display: "inline-block" }}>{children}</span>
    <span
      style={{
        display: "block",
        width: "50%",
        height: 4,
        backgroundColor: "#4caf50",
        position: "absolute",
        bottom: 0,
        left: 0,
        borderRadius: 2,
      }}
    />
  </Typography>
);

const SlidePanel = ({
  activeValue,
  myValue,
  direction = "left",
  children,
  sx,
}) => (
  <Slide in={activeValue === myValue} direction={direction}>
    <div>
      <TabPanel keepMounted value={myValue} sx={sx}>
        {children}
      </TabPanel>
    </div>
  </Slide>
);

// ———————————————————————————————————————
// Tab contents as tiny components
// ———————————————————————————————————————
const HelpTab = ({ tooltip, helpurl }) => (
  <>
    <UnderlinedTitle>{Blockly.Msg.tooltip_moreInformation_02}</UnderlinedTitle>
    <ReactMarkdown linkTarget="_blank">{tooltip}</ReactMarkdown>
    {helpurl && (
      <Button
        variant="contained"
        color="primary"
        href={helpurl}
        target="_blank"
        sx={{ mt: 2, px: 2, py: 1, borderRadius: 1, fontSize: "0.9rem" }}
      >
        Zur Dokumentation
      </Button>
    )}
  </>
);

const GraphTab = () => <GraphViewer />;
const DebugTab = () => <DebugViewer />;

// ———————————————————————————————————————
// Main component
// ———————————————————————————————————————
const TooltipViewer = () => {
  const { tooltip, helpurl } = useSelector((s) => s.workspace.code);
  const [value, setValue] = React.useState("help");

  return (
    <Card className="helpSection" sx={cardSx}>
      <CardContent>
        <TabContext value={value}>
          <TabList
            onChange={(_, v) => setValue(v)}
            variant="scrollable"
            TabIndicatorProps={{ sx: { height: 3, borderRadius: 1 } }}
            sx={tabListSx}
          >
            <Tab label="Help" value="help" disableRipple />
            <Tab label="Graph" value="graph" disableRipple />
            <Tab label="Debug" value="debug" disableRipple />
          </TabList>

          <SlidePanel
            activeValue={value}
            myValue="help"
            direction="left"
            sx={{ p: 1.5 }}
          >
            <HelpTab tooltip={tooltip} helpurl={helpurl} />
          </SlidePanel>

          <SlidePanel
            activeValue={value}
            myValue="graph"
            direction="left"
            sx={{ p: 0 }}
          >
            <GraphTab />
          </SlidePanel>

          <SlidePanel
            activeValue={value}
            myValue="debug"
            direction="up"
            sx={{ p: 2 }}
          >
            <DebugTab />
          </SlidePanel>
        </TabContext>
      </CardContent>
    </Card>
  );
};

export default TooltipViewer;
