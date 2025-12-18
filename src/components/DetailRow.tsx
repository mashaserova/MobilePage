import React from 'react';
import { Box, Typography, IconButton, Paper } from '@mui/material';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

interface DetailRowProps {
  label: string;
  value?: string;
}

export const DetailRow: React.FC<DetailRowProps> = ({ label, value }) => {
  return (
    <Paper sx={{ p: 2, mb: 1.5, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <Box>
        {!value ? (
           <Typography sx={{ fontSize: '18px', color: '#1D1D1F' }}>{label}</Typography>
        ) : (
            <>
                <Typography variant="caption" sx={{ display: 'block', mb: 0.5 }}>{label}</Typography>
                <Typography sx={{ fontSize: '18px', fontWeight: 500 }}>{value}</Typography>
            </>
        )}
      </Box>
      <IconButton edge="end">
        <EditOutlinedIcon sx={{ color: '#1D1D1F' }} />
      </IconButton>
    </Paper>
  );
};