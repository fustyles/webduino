var catTaiwanAirQuality = '<xml>'+
'<category name="%{BKY_TAIWANAIRQUALITY}" colour="%{BKY_TAIWANAIRQUALITY_HUE}">'+
'  <block type="pmgov_link">'+
'    <field name="value_format_">JSON</field>'+
'    <value name="value_url_">'+
'      <block type="text">'+
'        <field name="TEXT">https://opendata.epa.gov.tw/webapi/api/rest/datastore/355000000I-000259?sort=County</field>'+
'      </block>'+
'    </value>'+
'  </block>'+
'  <block type="pmgov_get">'+
'  </block>'+
' </category>'+
'</xml>';