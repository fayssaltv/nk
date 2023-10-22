
				var TWAGORAINARTICLE=TWAGORAINARTICLE||function(){

					var getHTScriptElement = function(){
						var hTClass = 'pa-ht-class';
						if (document.currentScript)
							return document.currentScript;
						else {

							var scripts = document.getElementsByTagName('script');
							var currentHTag = 'pahtag.tech/c/elahmad.com.js';
							var sl = scripts.length;
							for (var s=0; s<sl; s++){
								if ( (scripts[s].src.indexOf(currentHTag) !== -1) && !scripts[s].classList.contains(hTClass)){
									scripts[s].classList.add(hTClass);
									break;
								}
							}

							return scripts[s];
						}
					}

					var getQueryString = function(script){
						var queryString = script.src.replace(/^[^\?]+\??/,'');
						return '?'+queryString;
					}

					var getParameterByName = function(name, url) {
						if (!url) url = window.location.href;
						name = name.replace(/[\[\]]/g, '$&');
						var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
							results = regex.exec(url);
						if (!results) return null;
						if (!results[2]) return '';
						try {
							return decodeURIComponent(results[2].replace(/\+/g, ' '));
						}catch(err){
							return null;
						}
					}

					var getPartnerSCOfromHTUrl = function(currentScript){
						var schain = null;
						var currentHTScript = currentScript;
						var qS = getQueryString(currentHTScript);
						if (qS) schain = getParameterByName('schain',qS);

						return schain;

					}


					var config = {"site_name":"elahmad.com","rules":[{"name":"rule for sticky ads Desktop","priority":4,"type":"PAStickyAd","product":{"sticky":{"enabled":true,"type":"AdTag","code":"<!-- PA Ad Tag - elahmad.com_PAsticky-desktop_300x250-300x600-336x280 <- DO NOT MODIFY --><script src=\"\/\/ads.projectagoraservices.com\/?id=16863\" type=\"text\/javascript\"><\/script><!-- End PA Ad Tag -->","position":"bottom_left"}},"targeting":{"device_targeting":"desktop","adblock":false}},{"name":"sticky ads mobile","priority":4,"type":"PAStickyAd","product":{"sticky":{"enabled":true,"type":"AdTag","code":"<!-- PA Ad Tag - elahmad.com_PAsticky-mobile_320x50-320x100-300x50 <- DO NOT MODIFY --><script src=\"\/\/ads.projectagoraservices.com\/?id=16864\" type=\"text\/javascript\"><\/script><!-- End PA Ad Tag -->","position":"bottom_center"}},"targeting":{"device_targeting":"mobile","adblock":false}},{"name":"sticky ads mobile 300x250","priority":5,"type":"PAStickyAd","product":{"sticky":{"enabled":true,"type":"AdTag","code":"<!-- PA Ad Tag - elahmad.com_PAsticky-mobile_300x250 <- DO NOT MODIFY --><script src=\"\/\/ads.projectagoraservices.com\/?id=19797\" type=\"text\/javascript\"><\/script><!-- End PA Ad Tag -->","position":"bottom_center"}},"targeting":{"device_targeting":"mobile","adblock":false,"breakpoints":{"minWidth":390}}},{"name":"custom fix for stickyads","priority":4,"type":"CustomScript","product":{"CustomScript":{"scripts":[{"code":"<script>var addcss = function(css){    var head = document.getElementsByTagName('head')[0];    var s = document.createElement('style');    s.setAttribute('type', 'text\/css');    if (s.styleSheet) {           s.styleSheet.cssText = css;    } else {                        s.appendChild(document.createTextNode(css));    }    head.appendChild(s); }; addcss('#pa_sticky_ad_container_bottom_center {margin-right: auto;}');<\/script>"}]}},"targeting":{"device_targeting":"mobile"}},{"name":"taboola widget","priority":3,"type":"Taboola","product":{"Taboola":{"name":"elahmadmena-f19142864","tags":[{"selector":"#projectagora-ads","position":"after","widgets":[{"widgetType":"sponsored","mode":"sc-elahmad","containerId":"taboola-sponsored-below-article","placement":"Sponsored Below Article"}]}],"pageLevelTracking":{"enabled":true}}}}],"sco":{"paSellerId":"105687","paOwns":"Owned & Operated"}};

					var currentHTScript = getHTScriptElement();

					return {
						getConfig:function(){return config;},
						getPartnersSCO: function(){return getPartnerSCOfromHTUrl(currentHTScript);}
					}

				}();
				
				!function(e,t,a){var n,r=e.getElementsByTagName(t)[0];e.getElementById("pa-tag")||((n=e.createElement(t)).id="pa-tag",n.src="//palibzh.tech/libs/projectagora.min.js",r.parentNode.insertBefore(n,r))}(document,"script");
			