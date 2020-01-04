<?xml version="1.0" encoding="utf-8"?>

<xsl:stylesheet version ="1.0"
	xmlns:xsl = "http://www.w3.org/1999/XSL/Transform">

  <xsl:output method = "html" doctype-system = "about:legacy-compat"/>
  <!-- match document root -->
  <xsl:template match = "/">
    <html>
      <xsl:apply-templates/>
    </html>
  </xsl:template>

  <xsl:template match="resume">
    <html>
      <head>
        <meta charset = "utf-8"/>
        <link href="https://fonts.googleapis.com/css?family=Montserrat:500" rel="stylesheet"/>
        <link type ="text/css" rel = "stylesheet" href = "../shared/styles.css"/>
          <title>Resume</title>
      </head>

      <body>
        <nav class="banner">
          <a href="../tma1.html" id="assignmentLink"></a>
        </nav>
        <!--Header/Contact Information-->
        <h1>
          <xsl:value-of select="header/name"/>
        </h1>
        <p>
          <xsl:value-of select="header/address/street"/>
        </p>
        <p>
          <xsl:value-of select="header/address/city"/>, <xsl:value-of select="header/address/province"/>
          &#160;<xsl:value-of select="header/address/postalcode"/>
        </p>
        <p>
          Home: <xsl:value-of select="header/contact/homephone"/>
        </p>
        <p>
          Cell: <xsl:value-of select="header/contact/cellphone"/>
        </p>
        <p>
          <xsl:value-of select="header/contact/email"/>
        </p>
        <!--End of Header/Contact Information-->

        <!--Academics/Programming Experience-->
        <h2>
          <xsl:value-of select="education/degree/institution"/> Academic Status
        </h2>
        <span>
          <xsl:value-of select="education/degree/discipline"/>, <xsl:value-of select="education/degree/type"/>
        </span>
        <span>
          Class of <xsl:value-of select="education/degree/graduationclass"/>
        </span>
        <br/>
        <span>Cumulative Grade Point Average</span>&#160;
        <span>
          <b>
            <xsl:value-of select="education/degree/gpa"/>
          </b>/4.0
        </span>
        <h2>Programming Experience</h2>
        <ul>
          <li>
            Able to program in <xsl:for-each select="computerexperience/languages/language">
              <xsl:value-of select ="."/>
              <xsl:if test="position()!=last()">
                <xsl:text>, </xsl:text>
              </xsl:if>
            </xsl:for-each>
          </li>
          <li>
            Experienced with <xsl:for-each select="computerexperience/programs/program">
              <xsl:value-of select="."/>
              <xsl:if test="position()!=last()">
                <xsl:text>, </xsl:text>
              </xsl:if>
            </xsl:for-each>
          </li>
        </ul><!--End of Academics/Programming Experience-->
        
        <!--Work Experience-->
        <h2>Work Experience</h2>
        <xsl:for-each select="workexperience/job">
          <strong>
            <xsl:value-of select="company"/>
          </strong>
          <span>, <xsl:value-of select="location"/>&#160;<xsl:value-of select="startdate"/> - <xsl:value-of select="enddate"/>
          </span>
          <br/>
          <p>
            <xsl:value-of select="position"/>
          </p>
          <ul>
            <xsl:for-each select="tasks/task"> <!--Get Tasks per job-->
              <li>
                <xsl:value-of select="."/>
              </li>
            </xsl:for-each><!--End of Tasks-->
          </ul>
        </xsl:for-each>
        <!--End of Work Experience-->
        
        <!--General Information-->
        <h2>General Information</h2>
        <h3>Competition Experience</h3>
        <ul>
          <xsl:for-each select="generalinfo/competitionexperience/event">
            <li>
              <xsl:value-of select="."/>
            </li>
          </xsl:for-each>
        </ul><!--End of Competition Experience-->

        <h3>Hobbies</h3>
        <ul>
          <xsl:for-each select="generalinfo/hobbies/hobby">
            <li>
              <xsl:value-of select="."/>
            </li>
          </xsl:for-each>
        </ul>
      </body>
    </html>
  </xsl:template>

</xsl:stylesheet>