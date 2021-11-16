<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:xs="http://www.w3.org/2001/XMLSchema"
    xmlns:math="http://www.w3.org/2005/xpath-functions/math"
    xmlns:xd="http://www.oxygenxml.com/ns/doc/xsl" 
    exclude-result-prefixes="xs math xd" version="3.0">
    <!-- <xd:doc scope="stylesheet">
        <xd:desc>
            <xd:p><xd:b>Created on:</xd:b> November 16, 2021</xd:p>
            <xd:p><xd:b>Author:</xd:b> Elisa Beshero-Bondar</xd:p>
            <xd:p>XSLT to map HTML spans wrapping keywords back to XML</xd:p>
        </xd:desc>
    </xd:doc>-->

    <xsl:variable name="poetryColl" as="document-node()+" select="collection('../XML?select=*.xml')"/>
 
 <xsl:variable name="keywordsDoc" as="document-node()" select="doc('keywords.xml')"/>
    <xsl:variable name="keywords" as="xs:string+" select="$keywordsDoc//keyword ! normalize-space() => distinct-values() => sort()"/>
 
<xsl:mode on-no-match="shallow-copy"/>
    
    <xsl:template match="/">
        <xsl:for-each select="$poetryColl">
            <xsl:variable name="filename" as="xs:string" select="current() ! base-uri() ! tokenize(., '/')[last()]"/>
            <xsl:result-document method="xml" indent="yes" href="../XML-kw/{$filename}">
                
                <xsl:apply-templates/>
            
            </xsl:result-document>
        </xsl:for-each>
        
    </xsl:template>
    
   <xsl:template match="line">
       <line lineNum="{@lineNum}"><xsl:apply-templates/></line>

   </xsl:template>
    
    <xsl:template match="text()">
        <xsl:choose> 
            
            <xsl:when test="for $k in $keywords return current()[contains(., $k)]">
                <xsl:variable name="matchString" select="for $k in $keywords return $k[current()[contains(., $k)]]"/>
              
                
         
                    <xsl:analyze-string select="." regex="(\W)({$matchString})">
                        <xsl:matching-substring>
                            <xsl:value-of select="regex-group(1)"/>
                            <keyword><xsl:value-of select="regex-group(2)"/></keyword>
                        </xsl:matching-substring>
                        <xsl:non-matching-substring>
                            <xsl:analyze-string select="." regex="([Hh]eart)?beat">
                                <xsl:matching-substring>
                                    <keyword><xsl:value-of select="."/></keyword>
                                </xsl:matching-substring>
                                <xsl:non-matching-substring>
                                    <xsl:value-of select="."/>
                                </xsl:non-matching-substring>
                            </xsl:analyze-string>
                        </xsl:non-matching-substring>
                    </xsl:analyze-string>
            </xsl:when>
            <xsl:otherwise>
                <xsl:copy-of select="."/>
            </xsl:otherwise>
            
        </xsl:choose>
        
        
    </xsl:template>
    

  
</xsl:stylesheet>
