import React from 'react';
import { Box, Typography, Link, List, 
    ListItem, ListItemText, Paper,
    ToggleButton, ToggleButtonGroup, Tooltip, } from '@mui/material';
import { useLang } from "../contexts/LangContext";
import { Locale } from "../services/Locale";

export default function TermOfService() {

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
                                Terms of Service
                            </Typography>

                            <Typography variant="body2" color="text.secondary">
                                <strong>Effective Date:</strong> December 31, 2026
                            </Typography>

                            <Box mt={3}>
                                <Typography paragraph sx={{ textAlign: "justify" }}>
                                    These Terms of Service govern the use of the LifeAIer application and services (referred to as the “App”).
                                </Typography>

                                <Typography paragraph sx={{ textAlign: "justify" }}>
                                    By using the App, you agree to comply with these Terms.
                                </Typography>
                            </Box>

                            {/* 1 */}
                            <Box mt={4}>
                                <Typography variant="h5" fontWeight={600}>
                                    1. Use of the Application
                                </Typography>

                                <Typography paragraph>
                                    You agree to use the application only for lawful purposes.
                                </Typography>

                                <Typography>
                                    You must not:
                                </Typography>

                                <List dense>
                                    <ListItem>
                                        <ListItemText primary="Use the application for illegal activities" />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary="Attempt to breach or test the security of the system" />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary="Access other users’ data without permission" />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary="Interfere with or disrupt the functionality of the application" />
                                    </ListItem>
                                </List>
                            </Box>

                            {/* 2 */}
                            <Box mt={4}>
                                <Typography variant="h5" fontWeight={600}>
                                    2. User Accounts
                                </Typography>

                                <Typography paragraph>
                                    You may need to create an account to use certain features of the App.
                                </Typography>

                                <Typography>
                                    You agree to:
                                </Typography>

                                <List dense>
                                    <ListItem>
                                        <ListItemText primary="Provide accurate registration information" />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary="Keep your password secure" />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary="Take responsibility for all activities under your accounts" />
                                    </ListItem>
                                </List>

                                <Typography>
                                    If you suspect unauthorized use of your account, you must notify us immediately.
                                </Typography>
                            </Box>

                            {/* 3 */}
                            <Box mt={4}>
                                <Typography variant="h5" fontWeight={600}>
                                    3. Intellectual Property
                                </Typography>

                                <Typography paragraph>
                                    All content, design, software, logos, and materials in the application are the property of LifeAIer and are protected by copyright and other laws.
                                </Typography>

                                <Typography>
                                    Users may not:
                                </Typography>

                                <List dense>
                                    <ListItem>
                                        <ListItemText primary="Copy" />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary="Modify" />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary="Distribute" />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary="Use the materials for commercial purposes" />
                                    </ListItem>
                                </List>

                                <Typography>
                                    without permission.
                                </Typography>
                            </Box>

                            {/* 4 */}
                            <Box mt={4}>
                                <Typography variant="h5" fontWeight={600}>
                                    4. Changes to the Service
                                </Typography>

                                <Typography>
                                    We reserve the right to:
                                </Typography>

                                <List dense>
                                    <ListItem>
                                        <ListItemText primary="Modify" />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary="Update" />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary="Suspend" />
                                    </ListItem>
                                </List>

                                <Typography>
                                    any part of the application or its services at any time without prior notice.
                                </Typography>                              
                            </Box>

                            {/* 5 */}
                            <Box mt={4}>
                                <Typography variant="h5" fontWeight={600}>
                                    5. Limitation of Liability
                                </Typography>

                                <Typography paragraph>
                                    The application is provided “as is” without warranties of any kind.
                                </Typography>

                                <Typography>
                                    We are not responsible for:
                                </Typography>

                                <List dense>
                                    <ListItem>
                                        <ListItemText primary="Service interruptions" />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary="Loss of data" />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary="Any direct or indirect damages resulting from the use of the application" />
                                    </ListItem>
                                </List>
                            </Box>

                            {/* 6 */}
                            <Box mt={4}>
                                <Typography variant="h5" fontWeight={600}>
                                    6. Account Termination
                                </Typography>

                                <Typography>
                                    We may suspend or terminate your account if:
                                </Typography>

                                <List dense>
                                    <ListItem>
                                        <ListItemText primary="You violate these Terms of Service" />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary="You engage in illegal activities" />
                                    </ListItem>
                                </List>

                                <Typography>
                                    Users may also request deletion of their accounts at any time.
                                </Typography>
                            </Box>

                            {/* 7 */}
                            <Box mt={4}>
                                <Typography variant="h5" fontWeight={600}>
                                    7. Privacy
                                </Typography>

                                <Typography paragraph>
                                    Information about how we collect and use personal data is explained in our Privacy Policy.
                                </Typography>

                                <Typography>
                                    You can read it here:
                                </Typography>

                                <Link
                                    href={`/privacy-policy`}
                                    target="_blank"
                                >
                                    https://www.lifeaier.com/privacy-policy
                                </Link>
                            </Box>

                            {/* 8 */}
                            <Box mt={4}>
                                <Typography variant="h5" fontWeight={600}>
                                    8. Changes to These Terms
                                </Typography>

                                <Typography>
                                    We reserve the right to update these Terms of Service at any time.
                                    If changes are made, we may notify users by updating this page.
                                </Typography>
                            </Box>

                            {/* 9 */}
                            <Box mt={4}>
                                <Typography variant="h5" fontWeight={600}>
                                    9. Contact Us
                                </Typography>

                                <Typography>
                                    If you have any questions about these Terms of Service, please contact us:
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
                                Үйлчилгээний нөхцөл (Terms of Service)
                            </Typography>

                            <Typography variant="body2" color="text.secondary">
                                <strong>Хүчин төгөлдөр огноо:</strong> 2026 оны 12 сарын 31
                            </Typography>

                            <Box mt={3}>
                                <Typography paragraph sx={{ textAlign: "justify" }}>
                                    Эдгээр Үйлчилгээний нөхцөл нь LifeAIer аппликейшн болон үйлчилгээ (цаашид “Апп” гэж нэрлэнэ)-г ашиглахтай холбоотой дүрэм, нөхцөлийг тодорхойлно.
                                </Typography>

                                <Typography paragraph sx={{ textAlign: "justify" }}>
                                    Апп-ийг ашигласнаар та эдгээр нөхцөлийг хүлээн зөвшөөрч байгаагаа илэрхийлнэ.
                                </Typography>
                            </Box>

                            {/* 1 */}
                            <Box mt={4}>
                                <Typography variant="h5" fontWeight={600}>
                                    1. Аппликейшнийг ашиглах
                                </Typography>

                                <Typography paragraph>
                                    Та манай аппликейшнийг зөвхөн хууль ёсны зорилгоор ашиглах ёстой.
                                </Typography>

                                <Typography>
                                    Та дараах үйлдлийг хийхийг хориглоно:
                                </Typography>

                                <List dense>
                                    <ListItem>
                                        <ListItemText primary="Аппликейшнийг хууль бус зорилгоор ашиглах" />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary="Системийн аюулгүй байдлыг зөрчих оролдлого хийх" />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary="Бусад хэрэглэгчдийн мэдээлэлд зөвшөөрөлгүй нэвтрэх" />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary="Аппликейшний үйл ажиллагааг саатуулах эсвэл гэмтээх" />
                                    </ListItem>
                                </List>
                            </Box>

                            {/* 2 */}
                            <Box mt={4}>
                                <Typography variant="h5" fontWeight={600}>
                                    2. Хэрэглэгчийн бүртгэл
                                </Typography>

                                <Typography paragraph>
                                    Аппликейшнийг ашиглахын тулд та бүртгэл үүсгэж болно.
                                </Typography>

                                <Typography>
                                    Та дараах үүргийг хүлээнэ:
                                </Typography>

                                <List dense>
                                    <ListItem>
                                        <ListItemText primary="Бүртгэлийн мэдээллээ үнэн зөв оруулах" />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary="Нууц үгээ хамгаалах" />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary="Таны бүртгэлээр хийгдсэн бүх үйлдэлд хариуцлага хүлээх" />
                                    </ListItem>
                                </List>

                                <Typography>
                                    Хэрэв таны бүртгэлд зөвшөөрөлгүй хандалт илэрвэл бидэнд нэн даруй мэдэгдэх шаардлагатай.
                                </Typography>
                            </Box>

                            {/* 3 */}
                            <Box mt={4}>
                                <Typography variant="h5" fontWeight={600}>
                                    3. Оюуны өмч
                                </Typography>

                                <Typography paragraph>
                                    Аппликейшн болон түүний бүх контент, дизайн, логo, програм хангамж зэрэг нь LifeAIer-ийн өмч бөгөөд зохиогчийн эрх болон бусад хууль тогтоомжоор хамгаалагдсан.
                                </Typography>

                                <Typography>
                                    Хэрэглэгчид эдгээрийг:
                                </Typography>

                                <List dense>
                                    <ListItem>
                                        <ListItemText primary="хуулбарлах" />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary="өөрчлөх" />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary="тараах" />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary="арилжааны зорилгоор ашиглах" />
                                    </ListItem>
                                </List>

                                <Typography>
                                    эрхгүй.
                                </Typography>
                            </Box>

                            {/* 4 */}
                            <Box mt={4}>
                                <Typography variant="h5" fontWeight={600}>
                                    4. Үйлчилгээний өөрчлөлт
                                </Typography>

                                <Typography>
                                    Бид аппликейшний үйлчилгээг:
                                </Typography>

                                <List dense>
                                    <ListItem>
                                        <ListItemText primary="шинэчлэх" />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary="өөрчлөх" />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary="түр зогсоох" />
                                    </ListItem>
                                </List>

                                <Typography>
                                    эрхтэй.
                                </Typography>

                                <Typography>
                                    Эдгээр өөрчлөлтийг урьдчилан мэдэгдэхгүй хийх боломжтой.
                                </Typography>                              
                            </Box>

                            {/* 5 */}
                            <Box mt={4}>
                                <Typography variant="h5" fontWeight={600}>
                                    5. Хариуцлагын хязгаарлалт
                                </Typography>

                                <Typography paragraph>
                                    Аппликейшнийг “байгаа байдлаар нь” (as is) ашиглах боломжтойгоор санал болгодог.
                                </Typography>

                                <Typography>
                                    Бид дараах тохиолдолд хариуцлага хүлээхгүй:
                                </Typography>

                                <List dense>
                                    <ListItem>
                                        <ListItemText primary="үйлчилгээ тасалдах" />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary="өгөгдөл алдагдах" />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary="апп ашигласнаас үүссэн аливаа шууд болон шууд бус хохирол" />
                                    </ListItem>
                                </List>
                            </Box>

                            {/* 6 */}
                            <Box mt={4}>
                                <Typography variant="h5" fontWeight={600}>
                                    6. Бүртгэл цуцлах
                                </Typography>

                                <Typography>
                                    Бид дараах тохиолдолд хэрэглэгчийн бүртгэлийг цуцлах эрхтэй:
                                </Typography>

                                <List dense>
                                    <ListItem>
                                        <ListItemText primary="үйлчилгээний нөхцлийг зөрчсөн" />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary="хууль бус үйл ажиллагаа явуулсан" />
                                    </ListItem>
                                </List>

                                <Typography>
                                    Хэрэглэгч мөн хүссэн үедээ өөрийн бүртгэлийг устгах боломжтой.
                                </Typography>
                            </Box>

                            {/* 7 */}
                            <Box mt={4}>
                                <Typography variant="h5" fontWeight={600}>
                                    7. Нууцлал
                                </Typography>

                                <Typography paragraph>
                                    Хэрэглэгчийн мэдээллийг хэрхэн цуглуулах болон ашиглах талаар Нууцлалын бодлого-д тайлбарласан.
                                </Typography>

                                <Typography>
                                    Дэлгэрэнгүйг эндээс уншина уу:
                                </Typography>

                                <Link
                                    href={`/privacy-policy`}
                                    target="_blank"
                                >
                                    https://www.lifeaier.com/privacy-policy
                                </Link>
                            </Box>

                            {/* 8 */}
                            <Box mt={4}>
                                <Typography variant="h5" fontWeight={600}>
                                    8. Үйлчилгээний нөхцлийн шинэчлэлт
                                </Typography>

                                <Typography>
                                    Бид эдгээр Үйлчилгээний нөхцөл-ийг шаардлагатай үед шинэчлэх эрхтэй.
                                    Шинэчлэлт хийгдсэн тохиолдолд энэ хуудсанд мэдээлэх эсвэл хэрэглэгчдэд мэдэгдэж болно.
                                </Typography>
                            </Box>

                            {/* 9 */}
                            <Box mt={4}>
                                <Typography variant="h5" fontWeight={600}>
                                    9. Холбоо барих
                                </Typography>

                                <Typography>
                                    Хэрэв эдгээр Үйлчилгээний нөхцөл-тэй холбоотой асуулт байвал дараах хаягаар холбогдоно уу:
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