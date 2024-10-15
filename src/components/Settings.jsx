import { useState } from "react";
import { FaCog } from 'react-icons/fa';

export default function MenuSetting({ children, style }) {
    const [openSetting, setOpenSetting] = useState(false);
    const handleOpenSettings = () => {
        setOpenSetting(!openSetting);
    };
    return (
        <div className="relative">
            <button onClick={() => handleOpenSettings()} title="Settings">
            <FaCog className="text-2xl text-white" />
            </button>
            {openSetting && <div style={style}>{children}</div>}
        </div>
    );
}