<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:xs="http://www.w3.org/2001/XMLSchema"
    xmlns:math="http://www.w3.org/2005/xpath-functions/math"
    xmlns:xd="http://www.oxygenxml.com/ns/doc/xsl" 
    xmlns:html = "http://www.w3.org/1999/xhtml"
    xpath-default-namespace="http://pipernet.newtfire.org"
    xmlns="http://pipernet.newtfire.org"
    exclude-result-prefixes="xs math xd" version="3.0">
    <!-- <xd:doc scope="stylesheet">
        <xd:desc>
            <xd:p><xd:b>Created on:</xd:b> November 16, 2021</xd:p>
            <xd:p><xd:b>Author:</xd:b> Elisa Beshero-Bondar</xd:p>
            <xd:p>XSLT to map HTML spans wrapping keywords back to XML</xd:p>
        </xd:desc>
    </xd:doc>-->

<xsl:variable name="hollowHTML" as="document-node()" select="doc('../../Website/Poems/hollow_poem.html')"/>
 
 <xsl:variable name="keywords" select="$hollowHTML//html:span[not(@class='inner')] ! normalize-space() => distinct-values()"/>
 
<xsl:mode on-no-match="shallow-copy"/>
    
   <xsl:template match="line">
       <xsl:variable name="textNode" select="current()/text()"/>
    <xsl:choose> 
               
        <xsl:when test="for $k in $keywords return $textNode[contains(., $k)]">
            <xsl:variable name="matchString" select="for $k in $keywords return $k[$textNode[contains(., $k)]]"/>
            <xsl:value-of select="$matchString"/>
            
            <line lineNum="{@linNum}">
                <xsl:analyze-string select="$textNode" regex="$matchString">
                    <xsl:matching-substring>
                        <keyword><xsl:value-of select="."/></keyword>
                    </xsl:matching-substring>
                    <xsl:non-matching-substring>
                        <xsl:value-of select="."/>
                    </xsl:non-matching-substring>
                </xsl:analyze-string>
                
            </line>
         
     </xsl:when>
       <xsl:otherwise>
           <xsl:copy-of select="."/>
       </xsl:otherwise>
        
           </xsl:choose>
       
       
   </xsl:template>
    

  
</xsl:stylesheet>
