import React from 'react';
import { Box, Typography, Link, List, 
    ListItem, ListItemText, Paper,
    ToggleButton, ToggleButtonGroup, Tooltip,  } from '@mui/material';
import { useLang } from "../contexts/LangContext";
import { Locale } from "../services/Locale";

export default function DataDeletion() {

    const { lang, setLang } = useLang();
    
    return (
        <div className="content-layout">
            <Box
                sx={{
                    height: "100vh",
                    bgcolor: "#f5f5f5",
                    display: "flex",
                    justifyContent: "center",
                    overflow: "auto",
                    p: 1,
                }}
            >
                <Paper
                    elevation={3}
                    sx={{
                        width: "100%",
                        maxWidth: 900,
                        p: { xs: 3, md: 6 },
                        borderRadius: 2,
                        my: "auto",
                    }}
                >
                    {/* Language Switch */}
                    <Box display="flex" justifyContent="start" mb={3}>
                        <Tooltip title={Locale[lang].chooseLanguage}>
                            <ToggleButtonGroup
                                value={lang}
                                exclusive
                                onChange={(e, v) => v && setLang(v)}
                                size="small"
                            >
                                <ToggleButton sx={{ width: 120 }} value="mn">
                                    Монгол
                                </ToggleButton>
                                <ToggleButton sx={{ width: 120 }} value="en">
                                    English
                                </ToggleButton>
                            </ToggleButtonGroup>
                        </Tooltip>
                    </Box>

                    {/* ENGLISH VERSION */}
                    {lang === "en" && (
                        <>
                            <Typography variant="h4" fontWeight={700} gutterBottom>
                                Data Deletion
                            </Typography>

                            <Typography variant="body2" color="text.secondary">
                                <strong>Effective Date:</strong> December 31, 2026
                            </Typography>

                            <Box mt={3}>
                                <Typography paragraph sx={{ textAlign: "justify" }}>
                                    LifeAIer allows users to request the deletion of their personal data. 
                                    This page explains how you can request the deletion of your account and personal information.
                                </Typography>
                            </Box>

                            {/* 1 */}
                            <Box mt={4}>
                                <Typography variant="h5" fontWeight={600}>
                                    1. Requesting Data Deletion
                                </Typography>

                                <Typography paragraph>
                                    If you would like to delete your account and personal information, you can do so using one of the following methods.
                                </Typography>

                                <Typography variant="h6" fontWeight={600}>
                                    Within the Application
                                </Typography>

                                <Typography paragraph>
                                    If the application provides an <strong>Account Delete</strong> or <strong>Delete Account</strong> feature, you can use it to delete your account directly.
                                </Typography>

                                <Typography variant="h6" fontWeight={600}>
                                    Request via Email
                                </Typography>
                        
                                <Typography>
                                    You can also send a request to the following email address:
                                </Typography>

                                <Typography>
                                    Email:
                                </Typography>

                                <Link href="mailto:lifeaier@gmail.com">
                                    lifeaier@gmail.com
                                </Link>

                                <Typography paragraph>
                                </Typography>

                                <Typography>
                                    Please include the following information in your request:
                                </Typography>

                                <List dense>
                                    <ListItem>
                                        <ListItemText primary="Registered email address" />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary="User ID (if available)" />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary="Subject line: Account Deletion Request" />
                                    </ListItem>
                                </List>
                            </Box>

                            {/* 2 */}
                            <Box mt={4}>
                                <Typography variant="h5" fontWeight={600}>
                                    2. Data That Will Be Deleted
                                </Typography>

                                <Typography>
                                    When your account is deleted, the following information will be removed from our systems:
                                </Typography>

                                <List dense>
                                    <ListItem>
                                        <ListItemText primary="Name" />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary="Email address" />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary="User ID" />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary="Profile picture" />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary="User-related data within the application" />
                                    </ListItem>
                                </List>
                            </Box>

                            {/* 3 */}
                            <Box mt={4}>
                                <Typography variant="h5" fontWeight={600}>
                                    3. Data That May Be Retained
                                </Typography>

                                <Typography>
                                    Some information may be retained for a limited period for the following reasons:
                                </Typography>

                                <List dense>
                                    <ListItem>
                                        <ListItemText primary="Legal obligations" />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary="Security purposes" />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary="System backups" />
                                    </ListItem>
                                </List>

                                <Typography>
                                    Such data will only be kept for as long as necessary.
                                </Typography>
                            </Box>

                            {/* 4 */}
                            <Box mt={4}>
                                <Typography variant="h5" fontWeight={600}>
                                    4. Deletion Timeframe
                                </Typography>

                                <Typography>
                                    Your account and related personal information will be deleted within 30 days after the request is confirmed.
                                </Typography>                               
                            </Box>

                            {/* 5 */}
                            <Box mt={4}>
                                <Typography variant="h5" fontWeight={600}>
                                    5. Contact Us
                                </Typography>

                                <Typography>
                                    If you have questions about data deletion, please contact us:
                                </Typography>

                                <Typography>
                                    Email:
                                </Typography>

                                <Link href="mailto:lifeaier@gmail.com">
                                    lifeaier@gmail.com
                                </Link>
                            </Box>
                        </>
                    )}

                    {/* MONGOLIAN VERSION */}
                    {lang === "mn" && (
                        <>
                            <Typography variant="h4" fontWeight={700} gutterBottom>
                                Хувийн мэдээлэл устгах (Data Deletion)
                            </Typography>

                            <Typography variant="body2" color="text.secondary">
                                <strong>Хүчин төгөлдөр огноо:</strong> 2026 оны 12 сарын 31
                            </Typography>

                            <Box mt={3}>
                                <Typography paragraph sx={{ textAlign: "justify" }}>
                                    LifeAIer нь хэрэглэгчдэд өөрийн хувийн мэдээллийг устгуулах эрхийг олгодог. 
                                    Энэхүү хуудас нь таны мэдээллийг хэрхэн устгуулах талаар тайлбарлана.
                                </Typography>
                            </Box>

                            {/* 1 */}
                            <Box mt={4}>
                                <Typography variant="h5" fontWeight={600}>
                                    1. Мэдээлэл устгах хүсэлт гаргах
                                </Typography>

                                <Typography paragraph>
                                    Хэрэв та өөрийн бүртгэл болон хувийн мэдээллийг устгуулахыг хүсвэл дараах аргуудын аль нэгийг ашиглаж болно.
                                </Typography>

                                <Typography variant="h6" fontWeight={600}>
                                    Аппликейшн дотор
                                </Typography>

                                <Typography paragraph>
                                    Хэрэв аппликейшн дотор <strong>Account Delete</strong> эсвэл <strong>Delete Account</strong> боломж байгаа бол түүгээр дамжуулан өөрийн бүртгэлийг устгах боломжтой.
                                </Typography>

                                <Typography variant="h6" fontWeight={600}>
                                    Email илгээх
                                </Typography>
                        
                                <Typography>
                                    Та мөн дараах email хаяг руу хүсэлт илгээж болно:
                                </Typography>

                                <Typography>
                                    Email:
                                </Typography>

                                <Link href="mailto:lifeaier@gmail.com">
                                    lifeaier@gmail.com
                                </Link>

                                <Typography paragraph>
                                </Typography>

                                <Typography>
                                    Email илгээхдээ дараах мэдээллийг оруулна уу:
                                </Typography>

                                <List dense>
                                    <ListItem>
                                        <ListItemText primary="Бүртгэлтэй Email хаяг" />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary="Хэрэглэгчийн ID (хэрэв байгаа бол)" />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary="“Account Deletion Request” гэсэн гарчиг" />
                                    </ListItem>
                                </List>
                            </Box>

                            {/* 2 */}
                            <Box mt={4}>
                                <Typography variant="h5" fontWeight={600}>
                                    2. Ямар мэдээлэл устах вэ?
                                </Typography>

                                <Typography>
                                    Бүртгэл устгах үед дараах мэдээлэл манай системээс устгагдана:
                                </Typography>

                                <List dense>
                                    <ListItem>
                                        <ListItemText primary="Нэр" />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary="Email хаяг" />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary="Хэрэглэгчийн ID" />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary="Profile зураг" />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary="Апп доторх хэрэглэгчийн мэдээлэл" />
                                    </ListItem>
                                </List>
                            </Box>

                            {/* 3 */}
                            <Box mt={4}>
                                <Typography variant="h5" fontWeight={600}>
                                    3. Хадгалагдаж үлдэх мэдээлэл
                                </Typography>

                                <Typography>
                                    Зарим мэдээлэл дараах шалтгаанаар тодорхой хугацаанд хадгалагдаж болно:
                                </Typography>

                                <List dense>
                                    <ListItem>
                                        <ListItemText primary="Хууль эрх зүйн шаардлага" />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary="Аюулгүй байдлын шалгалт" />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary="Системийн нөөцлөлт (backup)" />
                                    </ListItem>
                                </List>

                                <Typography>
                                    Эдгээр мэдээлэл нь зөвхөн шаардлагатай хугацаанд хадгалагдана.
                                </Typography>
                            </Box>

                            {/* 4 */}
                            <Box mt={4}>
                                <Typography variant="h5" fontWeight={600}>
                                    4. Устгах хугацаа
                                </Typography>

                                <Typography>
                                    Мэдээлэл устгах хүсэлт баталгаажсанаас хойш 30 хоногийн дотор таны бүртгэл болон холбогдох мэдээллийг устгана.
                                </Typography>                               
                            </Box>

                            {/* 5 */}
                            <Box mt={4}>
                                <Typography variant="h5" fontWeight={600}>
                                    5. Холбоо барих
                                </Typography>

                                <Typography>
                                    Хэрэв танд мэдээлэл устгахтай холбоотой асуулт байвал дараах хаягаар холбогдоно уу:
                                </Typography>

                                <Typography>
                                    Email:
                                </Typography>

                                <Link href="mailto:lifeaier@gmail.com">
                                    lifeaier@gmail.com
                                </Link>
                            </Box>
                        </>
                    )}
                </Paper>
            </Box>
        </div>
    );
}