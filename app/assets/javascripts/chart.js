$(function () {
  Highcharts.theme = {

  	colors: ['#BED2E9', '#DCE8EB', '#C4DDD6', '#7798BF', '#aaeeee', '#ff0066', '#eeaaee',
  		'#55BF3B', '#DF5353', '#7798BF', '#aaeeee', '#6E6FB'],
  	chart: {
  		backgroundColor: '#FFF',
  		style: {
  			fontFamily: '\'Helvetica\', sans-serif'
  		},
  		plotBorderColor: '#606063'
  	},
  	title: {
  		style: {
  			color: '#000',
  			textTransform: 'uppercase',
  			fontSize: '20px'
  		}
  	},
  	subtitle: {
  		style: {
  			color: '#000',
  			textTransform: 'uppercase'
  		}
  	},
  	xAxis: {
  		gridLineColor: '#707073',
  		labels: {
  			style: {
  				color: '#000'
  			}
  		},
  		lineColor: '#707073',
  		minorGridLineColor: '#505053',
  		tickColor: '#707073',
  		title: {
  			style: {
  				color: '#A0A0A3'

  			}
  		}
  	},
  	yAxis: {
  		gridLineColor: '#707073',
  		labels: {
  			style: {
  				color: '#000'
  			}
  		},
  		lineColor: '#707073',
  		minorGridLineColor: '#505053',
  		tickColor: '#707073',
  		tickWidth: 1,
  		title: {
  			style: {
  				color: '#A0A0A3'
  			}
  		}
  	},
  	tooltip: {
  		backgroundColor: 'rgba(0, 0, 0, 0.85)',
  		style: {
  			color: '#F0F0F0'
  		}
  	},
  	plotOptions: {
  		series: {
        shadow: true,
  			dataLabels: {
  				color: '#B0B0B3'
  			},
  			marker: {
  				lineColor: '#333'
  			}
  		},
  		boxplot: {
  			fillColor: '#505053'
  		},
  		candlestick: {
  			lineColor: 'white'
  		},
  		errorbar: {
  			color: 'white'
  		}
  	},
  	legend: {
  		itemStyle: {
  			color: '#000'
  		},
  		itemHoverStyle: {
  			color: '#FFF'
  		},
  		itemHiddenStyle: {
  			color: '#606063'
  		}
  	},
  	credits: {
  		// style: {
  		// 	color: '#666'
  		// }
      enabled: false
  	},
    exporting: { enabled: false },
  	labels: {
  		style: {
  			color: '#707073'
  		}
  	},

  	drilldown: {
  		activeAxisLabelStyle: {
  			color: '#F0F0F3'
  		},
  		activeDataLabelStyle: {
  			color: '#F0F0F3'
  		}
  	},

  	navigation: {
  		buttonOptions: {
  			symbolStroke: '#DDDDDD',
  			theme: {
  				fill: '#505053'
  			}
  		}
  	},

  	// scroll charts
  	rangeSelector: {
  		buttonTheme: {
  			fill: '#505053',
  			stroke: '#000000',
  			style: {
  				color: '#CCC'
  			},
  			states: {
  				hover: {
  					fill: '#707073',
  					stroke: '#000000',
  					style: {
  						color: 'white'
  					}
  				},
  				select: {
  					fill: '#000003',
  					stroke: '#000000',
  					style: {
  						color: 'white'
  					}
  				}
  			}
  		},
  		inputBoxBorderColor: '#505053',
  		inputStyle: {
  			backgroundColor: '#333',
  			color: 'silver'
  		},
  		labelStyle: {
  			color: 'silver'
  		}
  	},

  	navigator: {
  		handles: {
  			backgroundColor: '#666',
  			borderColor: '#AAA'
  		},
  		outlineColor: '#CCC',
  		maskFill: 'rgba(255,255,255,0.1)',
  		series: {
  			color: '#7798BF',
  			lineColor: '#A6C7ED'
  		},
  		xAxis: {
  			gridLineColor: '#505053'
  		}
  	},

  	scrollbar: {
  		barBackgroundColor: '#808083',
  		barBorderColor: '#808083',
  		buttonArrowColor: '#CCC',
  		buttonBackgroundColor: '#606063',
  		buttonBorderColor: '#606063',
  		rifleColor: '#FFF',
  		trackBackgroundColor: '#404043',
  		trackBorderColor: '#404043'
  	},

  	// special colors for some of the
  	legendBackgroundColor: 'rgba(0, 0, 0, 0.5)',
  	background2: '#505053',
  	dataLabelsColor: '#B0B0B3',
  	textColor: '#C0C0C0',
  	contrastTextColor: '#F0F0F3',
  	maskColor: 'rgba(255,255,255,0.3)'
  };

  // Apply the theme
  Highcharts.setOptions(Highcharts.theme);
});
