<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:xs="http://www.w3.org/2001/XMLSchema"
    xmlns:math="http://www.w3.org/2005/xpath-functions/math"
    xmlns:xd="http://www.oxygenxml.com/ns/doc/xsl" xmlns="http://www.w3.org/1999/xhtml"
    exclude-result-prefixes="xs math xd" version="3.0">
    <!-- <xd:doc scope="stylesheet">
        <xd:desc>
            <xd:p><xd:b>Created on:</xd:b> Aug 24, 2021</xd:p>
            <xd:p><xd:b>Author:</xd:b> piperbaron</xd:p>
            <xd:p>XSLT to create an HTML page for poems</xd:p>
        </xd:desc>
    </xd:doc>-->
    <!--2021-08-31 ebb: I made some changes to help transform the lineInfoGroup elements 
        so their class attributes can point to specific lines. -->
    <xsl:output method="xhtml" encoding="utf-8" doctype-system="about:legacy-compat"
        omit-xml-declaration="yes"/>

    <xsl:template match="/">
        <html>
            <head>
                <title><xsl:apply-templates select="descendant::poemTitle"/> by Piper Baron</title>
                <meta name="keywords">
                    <xsl:attribute name="content">
                        <xsl:value-of select="descendant::tagPoint/[@tag]" separator=", "/>
                    </xsl:attribute>
                </meta>
            </head>
            <body>
                <div id="main">
                    <div id="title">
                        <xsl:apply-templates select="descendant::poemTitle"/>
                    </div>

                    <section id="about">
                        <div id="background">
                            <div id="bg_info">
                                <xsl:apply-templates select="descendant::bgInfo"/>
                            </div>
                            <div id="themes">Themes: <ul><xsl:apply-templates
                                        select="descendant::themes"/></ul>
                            </div>
                        </div>
                    </section>

                    <section id="poem_holder">
                        <div id="poem">
                            <xsl:apply-templates select="descendant::poem"/>
                        </div>

                        <div id="line_info">
                            <xsl:apply-templates select="descendant::lineInfo"/>
                        </div>

                    </section>
                </div>

            </body>
        </html>
    </xsl:template>

    <xsl:template match="p">
        <p>
            <xsl:apply-templates/>
        </p>
    </xsl:template>

    <xsl:template match="themePoint">
        <li>
            <xsl:apply-templates/>
        </li>
    </xsl:template>

    <xsl:template match="stanza">
        <div id="{@stanzaNum}" class="stanza">
            <xsl:apply-templates/>
        </div>
    </xsl:template>

    <xsl:template match="line">
        <div id="{@lineNum}" class="line">
            <xsl:apply-templates/>
        </div>
    </xsl:template>
    
<!-- ebb: Are these two templates no longer needed?
    <xsl:template match="lineGroup">
        <div id="lineGroupNum{@lineGroupNum}" class="line_group">
            <xsl:apply-templates/>
        </div>
    </xsl:template>


    <xsl:template match="lineGroup/line">
        <div id="lineNum-{@lineNum}" class="line">
            <span class="lineGroupNum{../@lineGroupNum}">
                <xsl:apply-templates/>
            </span>
        </div>
    </xsl:template>
-->
    <xsl:template match="lineInfoPoint">
     <!--ebb: I think we want to be able to point to multiple space-separated values 
         for the lines that need to be highlighted.
         But you're not allowed to use spaces in @id attributes, so I set a @class instead.
         And I used an @title attribute to hold the general info about this element.
         
     -->
        <div data-lineInfo="{for $i in tokenize(@passageRef, '\s+') return concat('line_info_point-', $i)}" class="line_info_point" style="display: none;">
            <xsl:apply-templates/>
        </div>

    </xsl:template>
    <xsl:template match="q">
        <q><xsl:apply-templates/></q>
    </xsl:template>

</xsl:stylesheet>
