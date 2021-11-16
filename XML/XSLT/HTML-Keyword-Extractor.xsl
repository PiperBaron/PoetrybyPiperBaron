<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:xs="http://www.w3.org/2001/XMLSchema"
    xmlns:math="http://www.w3.org/2005/xpath-functions/math"
    xmlns:xd="http://www.oxygenxml.com/ns/doc/xsl" 
    xpath-default-namespace = "http://www.w3.org/1999/xhtml"
    exclude-result-prefixes="xs math xd" version="3.0">
    <!-- <xd:doc scope="stylesheet">
        <xd:desc>
            <xd:p><xd:b>Created on:</xd:b> November 16, 2021</xd:p>
            <xd:p><xd:b>Author:</xd:b> Elisa Beshero-Bondar</xd:p>
            <xd:p>XSLT to map HTML spans wrapping keywords back to XML</xd:p>
        </xd:desc>
    </xd:doc>-->
    
   <xsl:output method="xml" indent="yes"/>
    
    <xsl:variable name="poetryCollectionHTML" as="document-node()+" select="collection('../../Website/Poems/?select=*.html')"/>
 
 <xsl:variable name="keywords" select="$poetryCollectionHTML//span[not(@class='inner')] ! normalize-space() => distinct-values()"/>
 
<xsl:template match="/">
    <xml>
        <list>
            <xsl:apply-templates select="$poetryCollectionHTML//span[not(@class='inner')]"/>
        </list>
    </xml>
    
</xsl:template>
    
    <xsl:template match="span">
        <xsl:variable name="filename" select="current() ! base-uri() ! tokenize(., '/')[last()]"/>
        <info>
            <file><xsl:value-of select="$filename ! substring-before(., '.html')[last()]"/><xsl:text>.xml</xsl:text></file>
            <keyword><xsl:apply-templates/></keyword>
        </info>
    </xsl:template>
    
  

  
</xsl:stylesheet>
