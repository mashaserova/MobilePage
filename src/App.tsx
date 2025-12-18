import React from 'react';
import { 
  ThemeProvider, 
  CssBaseline, 
  Container, 
  Box, 
  Typography, 
  Button, 
  Stack, 
  Paper,
  Radio,
  RadioGroup,
  FormControlLabel,
  Checkbox,
  IconButton
} from '@mui/material';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CurrencyRubleIcon from '@mui/icons-material/CurrencyRuble';
import theme from './theme';
import { VolumeInput } from '../src/components/VolumeInput';
import { DetailRow } from '../src/components/DetailRow';
import CustomCheckboxIcon from './components/customCheckboxIcon';

const yellowControlStyles = {
    color: '#1D1D1F',
    '&.Mui-checked': {
        color: '#FFD600',
    },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth={false} sx={{ maxWidth: '600px', py: 2 }}>
        
        {/* === Header Section === */}
        <Typography variant="h6" sx={{ mb: 2 }}>Способ вывода</Typography>
        
        <Stack direction="row" spacing={1} sx={{ mb: 3, overflowX: 'auto' }}>
          <Button variant="contained" color="primary">Банки</Button>
          <Button variant="text">Наличные</Button>
          <Button variant="text">Курьер</Button>
        </Stack>

        {/* === Currency Dropdown === */}
        <Paper sx={{ p: 2, mb: 3, display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
          <Box sx={{ 
              width: 40, height: 40, borderRadius: '50%', bgcolor: '#7986CB', color: 'white', 
              display: 'flex', alignItems: 'center', justifyContent: 'center', mr: 2 
          }}>
            <CurrencyRubleIcon />
          </Box>
          <Box sx={{ flexGrow: 1 }}>
            <Typography sx={{ fontWeight: 600 }}>Альфа-банк cash-in</Typography>
            <Typography variant="caption">1 USDT = 61.55 RUR</Typography>
          </Box>
          <ExpandMoreIcon />
        </Paper>

        {/* === Volumes Section === */}
        <Typography variant="h6" sx={{ mb: 1 }}>Объемы</Typography>
        
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
             <Typography variant="caption">Отдаете (лот 1000)</Typography>
             <Typography variant="caption">Получаете (лот 1000)</Typography>
        </Box>

        <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
            <Box sx={{ width: '50%' }}>
                <VolumeInput 
                    label="Ethereum, ETH" 
                    subLabel="" 
                    value="1 300.00000" 
                    isActive={true} 
                />
            </Box>
            <Box sx={{ width: '50%' }}>
                <VolumeInput 
                    label="Рубль, RUR" 
                    subLabel="" 
                    value="1 200.00" 
                    isActive={false} 
                />
            </Box>
        </Stack>

        {/* Custom Slider / Progress Bars */}
        <Stack direction="row" spacing={0.5} sx={{ mb: 0.5 }}>
            <Box sx={{ flex: 1, height: 6, bgcolor: '#1D1D1F', borderRadius: 4 }} />
            <Box sx={{ flex: 1, height: 6, bgcolor: '#1D1D1F', borderRadius: 4 }} />
            <Box sx={{ flex: 1, height: 6, bgcolor: '#FFF', borderRadius: 4 }} />
            <Box sx={{ flex: 1, height: 6, bgcolor: '#FFF', borderRadius: 4 }} />
        </Stack>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3, px: 1 }}>
             <Typography variant="caption">min</Typography>
             <Typography variant="caption">50%</Typography>
             <Typography variant="caption">75%</Typography>
             <Typography variant="caption">max</Typography>
        </Box>

        {/* === Requisites Section === */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
             <Typography variant="h6">Реквизиты</Typography>
             <FormControlLabel 
                control={
                  <Checkbox 
                    defaultChecked
                    sx={{color: '#8E8E93', '&.Mui-checked': { color: '#FFD600' }}}
                    checkedIcon={<CustomCheckboxIcon />} 
                  />} 
                label={<Typography variant="caption" sx={{ fontSize: '14px' }}>Сохранить реквизиты</Typography>} 
                labelPlacement="start"
                sx={{ ml: 0, mr: 0 }}
             />
        </Box>

        <Paper sx={{ mb: 2, borderRadius: '16px', overflow: 'hidden' }}>
  
        <Box sx={{ px: 2, pt: 2, pb: 1 }}>
          <RadioGroup row defaultValue="card" name="req-type-group">
            <FormControlLabel 
                value="card" 
                control={<Radio sx={yellowControlStyles} />} 
                label={<Typography sx={{ fontSize: '14px', fontWeight: 500 }}>Номер карты</Typography>} 
            />
            <FormControlLabel 
                value="contract" 
                control={<Radio sx={yellowControlStyles} />} 
                label={<Typography sx={{ fontSize: '14px' }}>Номер договора</Typography>} 
            />
          </RadioGroup>
        </Box>

        <Box sx={{ 
            px: 2, 
            pb: 2, 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between' 
        }}>
          <Box>
            <Typography sx={{ fontSize: '18px', fontWeight: 500, color: '#1D1D1F' }}>
              Номер карты
            </Typography>
          </Box>
          <IconButton edge="end">
            <EditOutlinedIcon sx={{ color: '#1D1D1F' }} />
          </IconButton>
        </Box>

      </Paper>
        <DetailRow label="ФИО владельца" value="" />
        <DetailRow label="Адрес" value="" />

      </Container>
    </ThemeProvider>
  );
}

export default App;