<script>
    import Footer from "./Footer.svelte";
</script>

<svelte:head>
    <link rel="stylesheet" href="./style.css" />
</svelte:head>

<!--
    Main Area Has To Be changed 
-->>
<section class="main_1" id="main_1">
    <div class="main_heading">
        <p>How to use this website?</p>
    </div>
    <div class="main_1_content">
        <iframe
            src="https://www.youtube.com/embed/VjM7oEuqxZ0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            class="sol_video"
        />
        <div class="sol_text">
            <div class="sol_notes">
                <div class="sol_text_heading">
                    <p>steps to get notes :-</p>
                </div>
                <div class="points">
                    <p>
                        1.Go to Notes page.<br />
                        2.choose program name ,semister and subject name from dropdowns
                        given in search bar .<br />
                        3.download or preview the file you wish.<br />
                        4.stay happy !!.
                    </p>
                </div>
            </div>
            <div class="sol_notice">
                <div class="sol_text_heading">
                    <p>steps to get notifications :-</p>
                </div>
                <div class="points">
                    <p>
                        1.Go to notice page.<br />
                        2.all current notifications regarding college will be visible
                        .<br />
                        3.you will be updated with all the notification.<br />
                        4. NOTE:- all notifications should be re-confirm from faculty/college<br
                        />
                        5.stay happy !!
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>
<!--------------------------------main_2--------------------------->
<div class="main_2">
    <div class="main_heading">
        <p>suggested youtube channels</p>
    </div>
    <div class="suggested_content">
        <div class="card">
            <a
                href="https://youtube.com/@ApnaCollegeOfficial"
                target="_blank"
                class="w-14"
                ><img
                    src="images/suggested_channel/Apna_college.png"
                    alt=""
                    srcset=""
                /></a
            >

            <p>PROGRAMMING | DBMS</p>
        </div>
        <div class="card">
            <a href="https://youtube.com/@gajendrapurohit" target="_blank"
                ><img
                    src="images/suggested_channel/dr_gajendra_purohit.png"
                    alt=""
                    srcset=""
                /></a
            >
            <p>ENGINEERING MATHEMATICS</p>
        </div>

        <div class="card">
            <a href="https://youtube.com/@GateSmashers" target="_blank"
                ><img
                    src="images/suggested_channel/gate_smashers.png"
                    alt=""
                    srcset=""
                /></a
            >
            <p>TOC | CSA | DE</p>
        </div>
        <div class="card">
            <a href="https://youtube.com/@TIKLESACADEMY" target="_blank"
                ><img
                    src="images/suggested_channel/tikles_academy.png"
                    alt=""
                    srcset=""
                /></a
            >
            <p>ENGINEERING GRAPHICS | BASIC ELECTRICAL ENGINEERING</p>
        </div>

        <div class="card">
            <a href="https://youtube.com/@CodeHelp" target="_blank"
                ><img
                    src="images/suggested_channel/code_help.png"
                    alt=""
                    srcset=""
                /></a
            >
            <p>PROGRAMMING</p>
        </div>
        <div class="card">
            <a
                href="https://youtube.com/playlist?list=PL5H7yfUmc71mCfqVcmsoWYYU4-7Uc0nUy"
                target="_blank"
                ><img
                    src="images/suggested_channel/knowledge_campus.png"
                    alt=""
                    srcset=""
                /></a
            >
            <p>DIGITAL ELECTRONICS</p>
        </div>
        <div class="card">
            <a href="https://youtube.com/@Lastmomenttuitions" target="_blank"
                ><img
                    src="images/suggested_channel/last_moment_solution.png"
                    alt=""
                    srcset=""
                /></a
            >
            <p>ENGINEERING</p>
        </div>

        <div class="card">
            <a href="https://youtube.com/@CodeWithHarry" target="_blank"
                ><img
                    src="images/suggested_channel/code_with_harry.png"
                    alt=""
                    srcset=""
                /></a
            >
            <p>PROGRAMMING</p>
        </div>
        <div class="card">
            <a href="https://youtube.com/@nesoacademy" target="_blank"
                ><img
                    src="images/suggested_channel/neso_academy.png"
                    alt=""
                    srcset=""
                /></a
            >
            <p>TOC | MATHS</p>
        </div>
        <div class="card">
            <a
                href="https://youtube.com/playlist?list=PLwdnzlV3ogoXgNjr_oe5cWQIbf72ZY4Zf"
                target="_blank"
                rel="noreferrer"
                ><img
                    src="images/suggested_channel/Nptel.png"
                    alt=""
                    srcset=""
                /></a
            >
            <p>MICROPROCESSOR | INTERFACING</p>
        </div>
    </div>
</div>
<!-------------------------------main_3------------------------>
<div class="main_3">
    <div class="main_heading">
        <p>OUR TEAM</p>
    </div>
    <div class="team_info">
        <div class="team">
            <img
                src="images/team_members/ayush_img.jpg"
                alt=""
                srcset=""
                class="member_img"
            />
            <div class="member_info">
                <h4><b>AYUSH SAXSENA</b></h4>
                <p>ADMIN</p>
                <ul>
                    <li>
                        <a
                            href="https://www.instagram.com/ayushsaxena_29/"
                            target="_blank"
                            rel="noreferrer"
                            ><img
                                src="images/instagram.png"
                                alt=""
                                srcset=""
                                class="icons"
                            /></a
                        >
                    </li>
                    <li>
                        <a
                            href="https://www.linkedin.com/in/ayush-saxena-3684b2218"
                            target="_blank"
                            rel="noreferrer"
                            ><img
                                src="images/linkdin.png"
                                alt=""
                                srcset=""
                                class="icons"
                            /></a
                        >
                    </li>
                    <li>
                        <a href="/admin"
                            ><img
                                src="images/gmail.png"
                                alt=""
                                srcset=""
                                class="icons"
                                target="_blank"
                            /></a
                        >
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>

<Footer />
