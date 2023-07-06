import { Box, IconButton, SxProps, Theme } from "@mui/material";
import { Delete, CopyAll } from "@mui/icons-material";
import { saveToClipboard } from "../utils/clipboard";
import { memory } from "../App";

interface MemoryBoxProps {
  item: memory;
  boxStyles: SxProps<Theme>;
  removeMemory: (id: string) => void;
}

const MemoryBox = ({ item, boxStyles, removeMemory }: MemoryBoxProps) => {
  const handleRemoveButton = (id: string) => {
    removeMemory(id);
  };

  return (
    <Box sx={{ ...boxStyles, marginBottom: "1rem" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {item.text}
        <div style={{ width: 'min-content'}}>
          <IconButton onClick={() => saveToClipboard(item.text)}>
            <CopyAll />
          </IconButton>
          <IconButton onClick={() => handleRemoveButton(item.id)}>
            <Delete />
          </IconButton>
        </div>
      </div>
    </Box>
  );
};

export default MemoryBox;
