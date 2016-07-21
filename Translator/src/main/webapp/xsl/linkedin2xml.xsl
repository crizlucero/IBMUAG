<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0"
	xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
	xmlns:xhtml="http://www.idpf.org/2007/opf">

	<xsl:output media-type="text/xml" version="1.0" encoding="UTF-8"
		indent="yes" use-character-maps="owl" />

	<xsl:strip-space elements="*" />
	<xsl:character-map name="owl">
		<xsl:output-character character="&amp;" string="&amp;" />
	</xsl:character-map>

	<xsl:variable name="URL"
		select="'https://raw.githubusercontent.com/crizlucero/ontologies/master/cfdv32.owl#'" />
	<xsl:variable name="XS" select="'http://www.w3.org/2001/XMLSchema#'" />

	<xsl:template match="html/head">
		<Perfil>
			<xsl:for-each select="descendant::div">
				<xsl:if test="//div/@id = 'profile'">
					<xsl:for-each select="child::section">
						<xsl:choose>
							<xsl:when
								test="self::*/descendant::div/@class = 'profile-overview-content'">
								<InformacionGeneral>
									<Nombre>
										<xsl:value-of select="descendant::h1" />
									</Nombre>
									<Ocupacion>
										<xsl:value-of select="descendant::p" />
									</Ocupacion>
									<Ubicacion>
										<xsl:if test="descendant::span/@class = 'locality'">
											<xsl:value-of select="descendant::dd/child::span" />
										</xsl:if>
									</Ubicacion>
									<Sector>
										<xsl:if
											test="descendant::dd/@class = 'descriptor' and descendant::dd/child::span/@class != 'locality'">
											<xsl:value-of select="." />
										</xsl:if>
									</Sector>
									<Extra>
										<xsl:for-each select="descendant::tr">
											<xsl:if test="self::*/@data-section = 'currentPositionsDetails'">
												<EmpleoActual>
													<xsl:if test="descendant::span/@class = 'org'">
														<xsl:value-of select="descendant::li/child::span" />
													</xsl:if>
												</EmpleoActual>
											</xsl:if>
											<xsl:if test="self::*/@data-section = 'pastPositionsDetails'">
												<EmpleosAnteriores>
													<xsl:for-each select="self::*/descendant::li">
														<Nombre>
															<xsl:value-of select="self::*" />
														</Nombre>
													</xsl:for-each>
												</EmpleosAnteriores>
											</xsl:if>
											<xsl:if test="self::*/@data-section = 'educationsDetails'">
												<Educacion>
													<xsl:for-each select="self::*/descendant::li">
														<Escuela>
															<xsl:value-of select="self::*" />
														</Escuela>
													</xsl:for-each>
												</Educacion>
											</xsl:if>
										</xsl:for-each>
									</Extra>
								</InformacionGeneral>
							</xsl:when>
							<xsl:when test="self::*/descendant::div/@class = 'description'">
								<Extracto>
									<xsl:value-of select="self::*/descendant::div/child::p" />
								</Extracto>
							</xsl:when>
						</xsl:choose>
					</xsl:for-each>
				</xsl:if>
			</xsl:for-each>
		</Perfil>
	</xsl:template>
</xsl:stylesheet>