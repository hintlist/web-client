<xsl:stylesheet version="2.0"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:xhtml="http://www.w3.org/1999/xhtml"
                exclude-result-prefixes="xhtml">
    <xsl:template match="xhtml:p[normalize-space(.)='']"/>
    <xsl:output media-type="xml" indent="yes" encoding="utf-8"/>

    <xsl:template match="/places">
        <html>
            <head>
                <meta charset="utf-8"/>
            </head>
            <body>
                <table border="3">
                <tbody>
                <xsl:apply-templates>
                    <xsl:sort select="rating" order="descending"/>
                </xsl:apply-templates>
                </tbody>
                </table>
                <a href="index.html">Назад</a>
            </body>
        </html>
    </xsl:template>

    <xsl:template match="/places/place">
                <tr>
                    <td><xsl:value-of select="name"/></td>
                    <td>Рейтинг: <xsl:value-of select="rating"/></td>
                </tr>
    </xsl:template>

</xsl:stylesheet>