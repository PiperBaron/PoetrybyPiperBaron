<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:xs="http://www.w3.org/2001/XMLSchema"
    xmlns:math="http://www.w3.org/2005/xpath-functions/math"
    xmlns:xd="http://www.oxygenxml.com/ns/doc/xsl" 
    exclude-result-prefixes="xs math xd" version="3.0">
    <!-- <xd:doc scope="stylesheet">
        <xd:desc>
            <xd:p><xd:b>Created on:</xd:b> Aug 24, 2021</xd:p>
            <xd:p><xd:b>Author:</xd:b> piperbaron</xd:p>
            <xd:p>XSLT to create an HTML page for poems</xd:p>
        </xd:desc>
    </xd:doc>-->
   
<xsl:mode on-no-match="shallow-copy"/>
    
    <xsl:template match="stanza">
        <stanza stanzaNum="s{count(preceding::stanza) + 1}"><xsl:apply-templates/></stanza>
    </xsl:template>
    
    <xsl:template match="line">
        <line lineNum="l{count(preceding::line) + 1}"><xsl:apply-templates/></line>
    </xsl:template>
    
    <xsl:template match="lineGroup">
        <xsl:apply-templates/>
    </xsl:template>
  
</xsl:stylesheet>
