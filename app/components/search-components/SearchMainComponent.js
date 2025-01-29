'use client'

import { useState } from "react";
import { Search } from "lucide-react";
import { Button } from "@mui/material";
import { Menu, MenuItem } from "@mui/material";

export default function SearchMainComponent() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("Semua");
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (option) => {
    setFilter(option);
    setAnchorEl(null);
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-[36px] font-semibold text-center mb-4">Cari Yang Kamu Mau Disini</h1>
      
      <div className="relative flex items-center bg-[#F5F5F5] rounded-lg p-2">
        <Search className="text-gray-500 w-5 h-5 ml-2" />
        <input
          type="text"
          placeholder="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 bg-transparent outline-none px-2"
        />
      </div>
      
      <div className="flex justify-between items-center mt-4 text-sm text-gray-600">
        <span>200 hasil</span>
        
        <div>
          <Button onClick={handleClick} className="text-sm">{filter}</Button>
          <Menu anchorEl={anchorEl} open={open} onClose={() => setAnchorEl(null)}>
            <MenuItem onClick={() => handleClose("Semua")}>Semua</MenuItem>
            <MenuItem onClick={() => handleClose("Terbaru")}>Terbaru</MenuItem>
            <MenuItem onClick={() => handleClose("Terlama")}>Terlama</MenuItem>
          </Menu>
        </div>
      </div>
    </div>
  );
}
