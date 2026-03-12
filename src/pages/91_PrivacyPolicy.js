import React from "react";
import {
    Box,
    Typography,
    Link,
    List,
    ListItem,
    ListItemText,
    Paper,
    ToggleButton,
    ToggleButtonGroup,
    Tooltip,
} from "@mui/material";
import { useLang } from "../contexts/LangContext";
import { Locale } from "../services/Locale";

export default function PrivacyPolicy() {
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
                                Privacy Policy
                            </Typography>

                            <Typography variant="body2" color="text.secondary">
                                <strong>Effective Date:</strong> December 31, 2026
                            </Typography>

                            <Box mt={3}>
                                <Typography paragraph sx={{ textAlign: "justify" }}>
                                    LifeAIer respects and protects the privacy of its users’ personal information. 
                                    This Privacy Policy explains how we collect, use, and protect your information when you use our application and services.
                                </Typography>

                                <Typography paragraph sx={{ textAlign: "justify" }}>
                                    By using our application, you agree to the collection and use of information in accordance with this policy.
                                </Typography>
                            </Box>

                            {/* 1 */}
                            <Box mt={4}>
                                <Typography variant="h5" fontWeight={600}>
                                    1. Information We Collect
                                </Typography>

                                <Typography paragraph>
                                    When you use our application, we may collect the following types of information.
                                </Typography>

                                <Typography variant="h6" fontWeight={600}>
                                    1.1 Information Provided by the User
                                </Typography>

                                <Typography>
                                    When you register or log in, we may collect the following information:
                                </Typography>

                                <List dense>
                                    <ListItem>
                                        <ListItemText primary="User ID" />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary="Password (email registration)" />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary="Name" />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary="Email address" />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary="Profile picture" />
                                    </ListItem>
                                </List>

                                <Typography variant="h6" fontWeight={600} mt={2}>
                                    1.2 Login with Google
                                </Typography>

                                <Typography>
                                    If you choose Google Sign-In, we may collect the following information:
                                </Typography>

                                <List dense>
                                    <ListItem>
                                        <ListItemText primary="Name" />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary="Email address" />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary="Profile picture" />
                                    </ListItem>
                                </List>

                                <Typography paragraph>
                                    We do <strong>not store your Google password</strong>.
                                </Typography>

                                <Typography paragraph>
                                    This information is only accessed with your permission through Google authentication services.
                                </Typography>
                            </Box>

                            {/* 2 */}
                            <Box mt={4}>
                                <Typography variant="h5" fontWeight={600}>
                                    2. How We Use Your Information
                                </Typography>

                                <Typography>
                                    The collected information may be used for the following purposes:
                                </Typography>

                                <List dense>
                                    <ListItem>
                                        <ListItemText primary="Create and manage user accounts" />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary="Authenticate user login" />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary="Store user profiles and settings" />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary="Improve the application and services" />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary="Notify users about policy updates" />
                                    </ListItem>
                                </List>
                            </Box>

                            {/* 3 */}
                            <Box mt={4}>
                                <Typography variant="h5" fontWeight={600}>
                                    3. Data Security
                                </Typography>

                                <Typography paragraph>
                                    We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.
                                </Typography>

                                <Typography paragraph>
                                    However, no method of transmission over the internet or server storage is 100% secure.
                                </Typography>
                            </Box>

                            {/* 4 */}
                            <Box mt={4}>
                                <Typography variant="h5" fontWeight={600}>
                                    4. Third-Party Services
                                </Typography>

                                <Typography>
                                    Our application may use the following third-party service:
                                </Typography>

                                <List dense>
                                    <ListItem>
                                        <ListItemText primary="Google Sign-In (authentication service)" />
                                    </ListItem>
                                </List>

                                <Typography>
                                    These services have their own privacy policies regarding how they handle user information.
                                </Typography>                                
                            </Box>

                            {/* 5 */}
                            <Box mt={4}>
                                <Typography variant="h5" fontWeight={600}>
                                    5. Data Sharing
                                </Typography>

                                <Typography paragraph>
                                    Our application does not sell, rent, or trade your personal information to third parties.
                                    Your information is used only for operating and improving the application.
                                </Typography>
                            </Box>

                            {/* 6 */}
                            <Box mt={4}>
                                <Typography variant="h5" fontWeight={600}>
                                    6. Data Retention
                                </Typography>

                                <Typography paragraph>
                                    We retain your information only for as long as necessary to provide our services.
                                </Typography>
                            </Box>

                            {/* 7 */}
                            <Box mt={4}>
                                <Typography variant="h5" fontWeight={600}>
                                    7. User Rights
                                </Typography>

                                <Typography>
                                    You may have the right to:
                                </Typography>

                                <List dense>
                                    <ListItem>
                                        <ListItemText primary="Access your personal information" />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary="Correct inaccurate information" />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary="Request deletion of your data" />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary="Withdraw your consent" />
                                    </ListItem>
                                </List>

                                <Typography>
                                    For more information about deleting your personal data, please visit:
                                </Typography>

                                <Link
                                    href={`/data-deletion`}
                                    target="_blank"
                                >
                                    https://www.lifeaier.com/data-deletion
                                </Link>
                            </Box>

                            {/* 8 */}
                            <Box mt={4}>
                                <Typography variant="h5" fontWeight={600}>
                                    8. Children’s Privacy
                                </Typography>

                                <Typography paragraph>
                                    Our application is not intended for children under the age of 16.
                                    We do not knowingly collect personal information from children under 16.
                                </Typography>
                            </Box>

                            {/* 9 */}
                            <Box mt={4}>
                                <Typography variant="h5" fontWeight={600}>
                                    9. Changes to This Privacy Policy
                                </Typography>

                                <Typography paragraph>
                                    We reserve the right to update this Privacy Policy when necessary. If changes are made, we may notify users via email or by updating this page.
                                </Typography>
                            </Box>

                            {/* 10 */}
                            <Box mt={4}>
                                <Typography variant="h5" fontWeight={600}>
                                    10. Terms of Service
                                </Typography>

                                <Typography>
                                    You can read our Terms of Service here:
                                </Typography>

                                <Link
                                    href={`/term-of-service`}
                                    target="_blank"
                                >
                                    https://www.lifeaier.com/term-of-service
                                </Link>
                            </Box>

                            {/* 11 */}
                            <Box mt={4}>
                                <Typography variant="h5" fontWeight={600}>
                                    11. Contact Us
                                </Typography>

                                <Typography>
                                    If you have any questions regarding this Privacy Policy, please contact us at:                                    
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
                                Нууцлалын бодлого (Privacy Policy)
                            </Typography>

                            <Typography variant="body2" color="text.secondary">
                                <strong>Хүчин төгөлдөр огноо:</strong> 2026 оны 12 сарын 31
                            </Typography>

                            <Box mt={3}>
                                <Typography paragraph sx={{ textAlign: "justify" }}>
                                    LifeAIer нь хэрэглэгчдийн хувийн мэдээллийн нууцлалыг хүндэтгэн хамгаалах үүрэгтэй. 
                                    Энэхүү Нууцлалын бодлого нь манай аппликейшн болон үйлчилгээг ашиглах үед таны мэдээллийг хэрхэн цуглуулах, ашиглах, хамгаалах талаар тайлбарлана.
                                </Typography>

                                <Typography paragraph sx={{ textAlign: "justify" }}>
                                    Манай аппликейшнийг ашигласнаар та энэхүү бодлогын дагуу мэдээлэл цуглуулах болон ашиглахыг зөвшөөрч байна.
                                </Typography>
                            </Box>

                            {/* 1 */}
                            <Box mt={4}>
                                <Typography variant="h5" fontWeight={600}>
                                    1. Бид ямар мэдээлэл цуглуулдаг вэ?
                                </Typography>

                                <Typography paragraph>
                                    Манай аппликейшнийг ашиглах үед дараах төрлийн мэдээллийг цуглуулж болно.
                                </Typography>

                                <Typography variant="h6" fontWeight={600}>
                                    1.1 Хэрэглэгчийн оруулсан мэдээлэл
                                </Typography>

                                <Typography>
                                    Та бүртгүүлэх эсвэл нэвтрэх үед дараах мэдээллийг цуглуулж болно:
                                </Typography>

                                <List dense>
                                    <ListItem>
                                        <ListItemText primary="Хэрэглэгчийн ID" />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary="Нууц үг (имэйл бүртгэл)" />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary="Нэр" />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary="Email хаяг" />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary="Profile зураг" />
                                    </ListItem>
                                </List>

                                <Typography variant="h6" fontWeight={600} mt={2}>
                                    1.2 Google хаягаар нэвтрэх
                                </Typography>

                                <Typography>
                                    Хэрэв та Google Sign-In ашиглан нэвтрэх үед дараах мэдээллийг цуглуулж болно:
                                </Typography>

                                <List dense>
                                    <ListItem>
                                        <ListItemText primary="Нэр" />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary="Email хаяг" />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary="Profile зураг" />
                                    </ListItem>
                                </List>

                                <Typography paragraph>
                                    Бид <strong>таны Google нууц үгийг хадгалдаггүй</strong>.
                                </Typography>

                                <Typography paragraph>
                                    Эдгээр мэдээллийг зөвхөн таны зөвшөөрлийн үндсэн дээр Google-ийн нэвтрэлтийн үйлчилгээ ашиглан авна.
                                </Typography>
                            </Box>

                            {/* 2 */}
                            <Box mt={4}>
                                <Typography variant="h5" fontWeight={600}>
                                    2. Мэдээллийг хэрхэн ашигладаг вэ
                                </Typography>

                                <Typography>
                                    Цуглуулсан мэдээллийг дараах зорилгоор ашиглана:
                                </Typography>

                                <List dense>
                                    <ListItem>
                                        <ListItemText primary="Хэрэглэгчийн бүртгэл үүсгэх болон удирдах" />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary="Нэвтрэлтийг баталгаажуулах" />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary="Хэрэглэгчийн профайл болон тохиргоог хадгалах" />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary="Аппликейшний үйлчилгээг сайжруулах" />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary="Нууцлалын бодлого болон үйлчилгээний шинэчлэлийн талаар мэдээлэх" />
                                    </ListItem>
                                </List>
                            </Box>

                            {/* 3 */}
                            <Box mt={4}>
                                <Typography variant="h5" fontWeight={600}>
                                    3. Мэдээллийн аюулгүй байдал
                                </Typography>

                                <Typography paragraph>
                                    Бид таны хувийн мэдээллийг зөвшөөрөлгүй хандалт, өөрчлөлт, задруулалт болон устгалаас хамгаалахын тулд зохих техникийн болон зохион байгуулалтын арга хэмжээг хэрэгжүүлдэг.
                                </Typography>

                                <Typography paragraph>
                                    Гэсэн хэдий ч интернетээр мэдээлэл дамжуулах болон сервер хадгалалтын аль ч арга 100% аюулгүй байх боломжгүй.
                                </Typography>
                            </Box>

                            {/* 4 */}
                            <Box mt={4}>
                                <Typography variant="h5" fontWeight={600}>
                                    4. Гуравдагч талын үйлчилгээ
                                </Typography>

                                <Typography>
                                    Манай аппликейшн дараах гуравдагч талын үйлчилгээг ашиглаж болно:
                                </Typography>

                                <List dense>
                                    <ListItem>
                                        <ListItemText primary="Google Sign-In (нэвтрэлтийн үйлчилгээ)" />
                                    </ListItem>
                                </List>

                                <Typography>
                                    Эдгээр үйлчилгээ нь өөрийн гэсэн нууцлалын бодлоготой байдаг.
                                </Typography>                                
                            </Box>

                            {/* 5 */}
                            <Box mt={4}>
                                <Typography variant="h5" fontWeight={600}>
                                    5. Мэдээлэл дамжуулах
                                </Typography>

                                <Typography paragraph>
                                    Манай аппликейшн нь таны хувийн мэдээллийг гуравдагч этгээдэд худалдах, түрээслэх, эсвэл арилжаалахгүй.
                                    Таны мэдээллийг зөвхөн аппликейшний үйлчилгээг ажиллуулах болон сайжруулах зорилгоор ашиглана.
                                </Typography>
                            </Box>

                            {/* 6 */}
                            <Box mt={4}>
                                <Typography variant="h5" fontWeight={600}>
                                    6. Мэдээлэл хадгалах хугацаа
                                </Typography>

                                <Typography paragraph>
                                    Бид таны мэдээллийг зөвхөн үйлчилгээ үзүүлэхэд шаардлагатай хугацаанд хадгална.
                                </Typography>
                            </Box>

                            {/* 7 */}
                            <Box mt={4}>
                                <Typography variant="h5" fontWeight={600}>
                                    7. Хэрэглэгчийн эрх
                                </Typography>

                                <Typography>
                                    Та дараах эрхтэй байж болно:
                                </Typography>

                                <List dense>
                                    <ListItem>
                                        <ListItemText primary="Өөрийн мэдээллийг харах" />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary="Алдаатай мэдээллийг засах" />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary="Хувийн мэдээллээ устгуулах хүсэлт гаргах" />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary="Зөвшөөрлөө буцаах" />
                                    </ListItem>
                                </List>

                                <Typography>
                                    Хувийн мэдээллээ устгах талаар дэлгэрэнгүйг дараах холбоосоор үзнэ үү:
                                </Typography>

                                <Link
                                    href={`/data-deletion`}
                                    target="_blank"
                                >
                                    https://www.lifeaier.com/data-deletion
                                </Link>
                            </Box>

                            {/* 8 */}
                            <Box mt={4}>
                                <Typography variant="h5" fontWeight={600}>
                                    8. Хүүхдийн нууцлал
                                </Typography>

                                <Typography paragraph>
                                    Манай аппликейшн нь 16 наснаас доош хүүхдэд зориулагдаагүй.
                                    Бид 16 наснаас доош хүүхдийн хувийн мэдээллийг санаатайгаар цуглуулдаггүй.
                                </Typography>
                            </Box>

                            {/* 9 */}
                            <Box mt={4}>
                                <Typography variant="h5" fontWeight={600}>
                                    9. Нууцлалын бодлогын шинэчлэлт
                                </Typography>

                                <Typography paragraph>
                                    Бид энэхүү Нууцлалын бодлогыг шаардлагатай үед шинэчлэх эрхтэй. Шинэчлэлт хийсэн тохиолдолд хэрэглэгчдэд email илгээх эсвэл энэ хуудсанд мэдээлэх боломжтой.
                                </Typography>
                            </Box>

                            {/* 10 */}
                            <Box mt={4}>
                                <Typography variant="h5" fontWeight={600}>
                                    10. Үйлчилгээний нөхцөл
                                </Typography>

                                <Typography>
                                    Манай үйлчилгээний нөхцөлтэй дараах холбоосоор танилцана уу:
                                </Typography>

                                <Link
                                    href={`/term-of-service`}
                                    target="_blank"
                                >
                                    https://www.lifeaier.com/term-of-service
                                </Link>
                            </Box>

                            {/* 11 */}
                            <Box mt={4}>
                                <Typography variant="h5" fontWeight={600}>
                                    11. Холбоо барих
                                </Typography>

                                <Typography>
                                    Хэрэв энэхүү Нууцлалын бодлого-той холбоотой асуулт байвал дараах хаягаар холбогдоно уу:
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