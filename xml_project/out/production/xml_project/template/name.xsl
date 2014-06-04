<xsl:stylesheet version="2.0"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:xhtml="http://www.w3.org/1999/xhtml"
                exclude-result-prefixes="xhtml">
    <xsl:template match="/places">
        <xsl:apply-templates>
            <xsl:sort select="name"/>
        </xsl:apply-templates>
    </xsl:template>

</xsl:stylesheet>