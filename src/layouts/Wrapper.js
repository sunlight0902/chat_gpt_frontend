import Box from '@mui/material/Box';

const Wrapper = () => {
    return (
        <Box
            sx={{
                marginTop: 8,
                minHeight: 'calc(100vh - 64px - 48px)',
                padding: (theme) => theme.spacing(4, 0)
            }}
        >
            {/* <Outlet /> */}
        </Box>
    );
}
export default Wrapper;
