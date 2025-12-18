import React from 'react';
import { Box, Typography, IconButton, Paper, InputBase } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

interface VolumeInputProps {
  label: string;
  subLabel: string;
  value: string;
  isActive?: boolean;
}

export const VolumeInput: React.FC<VolumeInputProps> = ({ label, subLabel, value, isActive }) => {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 2,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        border: isActive ? '2px solid #2979FF' : '2px solid transparent',
        transition: 'border 0.2s',
      }}
    >
      <Typography variant="caption" align="center" sx={{ mb: 1, display: 'block' }}>
        {label}
      </Typography>
      
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <IconButton size="small" sx={{ bgcolor: '#F2F3F5' }}>
          <RemoveIcon fontSize="small" />
        </IconButton>
        <InputBase
            value={value}
            sx={{ 
                input: { textAlign: 'center', fontWeight: 600, fontSize: '18px' },
                flex: 1
            }}
        />

        <IconButton size="small" sx={{ bgcolor: '#F2F3F5' }}>
          <AddIcon fontSize="small" />
        </IconButton>
      </Box>
    </Paper>
  );
};