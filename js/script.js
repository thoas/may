$(document).ready(function() {
  var m = document,
      g = "getElementById",
      p = "getElementsByTagName",
      n = {
        'inspirations': {
          'path': ['M61.279,14.228c-0.269-0.404-2.734-1.838-2.734-1.838s0,0,0.583-2.331c0.582-2.331,1.39-4.214,1.613-4.261  c0.225-0.047,0-3.09,0-3.09S55.9,0.779,48.773,0.555c-7.128-0.224-10.444,1.39-12.014,2.017c-1.569,0.628-3.138,2.376-4.438,2.914  c-1.3,0.538-2.779,0.313-3.81-0.18c-1.031-0.493-2.6-2.51-5.738-3.833c-3.138-1.322-7.352-1.546-11.52-1.457  C7.085,0.107,2.065,1.362,1.124,1.631C0.182,1.9,0.357,2.567,0.357,2.567c0,0.4,0.094,1.978,0.184,2.157  C0.63,4.903,1.168,5.397,1.571,6.428c0.404,1.031,0.673,3.765,0.673,3.765s-0.314,0.045-0.941,0.269  c-0.628,0.225-1.21,0.449-1.3,1.614c-0.09,1.166,1.883,2.779,2.196,2.779s1.299-0.672,1.299-0.672s0.046,0.583,0.494,1.614  c0.448,1.031,2.824,3.631,4.976,4.438c2.151,0.807,5.738,1.255,9.638,0.807c3.9-0.449,5.245-2.062,6.544-3.766  c1.3-1.704,2.734-6.724,3.407-7.621s2.331-0.807,3.497-0.134c1.166,0.672,1.345,5.424,3.72,8.472  c2.376,3.048,5.738,3.81,9.861,3.989c4.125,0.18,6.545-0.986,8.248-2.062c1.704-1.076,3.184-3.452,3.184-3.452  s0.761,0.493,1.3,0.762c0.537,0.269,0.896,0.493,1.883,0C61.234,16.738,61.548,14.63,61.279,14.228z M9.192,2.035  c1.838-0.583,5.155-0.493,9.817,0c4.662,0.493,6.186,3.003,6.186,3.003s-2.376,0-3.362,0c-0.986,0-4.124-0.134-4.482-0.224  c-0.359-0.089,0.224-0.224-1.076-0.403C14.998,4.234,6.93,3.106,6.772,3.109c0,0-0.001,0.001-0.001,0.001  C6.769,3.109,6.77,3.109,6.772,3.109C6.802,3.085,7.4,2.603,9.192,2.035z M3.768,9.565C2.917,8.041,4.351,5.71,4.351,5.71  s0.538-0.044,2.465,0c1.928,0.045,6.052,0.269,6.052,0.269s-0.314,0.045-1.166,0.404C10.851,6.741,3.768,9.565,3.768,9.565z   M26.136,11.762c-0.762,2.645-1.838,6.634-4.931,7.62c-3.093,0.986-7.844,1.883-11.206,0.359c-3.362-1.524-4.886-4.169-5.514-6.32  c0,0,7.666-5.265,10.444-5.792c2.779-0.528,5.29-1.066,6.41-1.066c1.12,0,4.796,0.224,4.796,0.224S26.898,9.117,26.136,11.762z   M45.59,2.079c5.11-0.403,8.383,1.524,8.383,1.524S44.649,4.5,44.335,4.544c-0.313,0.045-0.493,0.224-0.493,0.224l-7.664,0.269  C38.194,3.424,40.48,2.482,45.59,2.079z M51.911,19.785c-2.735,0.986-7.89,2.107-11.834,0c-3.944-2.106-5.469-6.408-5.648-8.785  c-0.179-2.376-0.045-2.914,0.314-3.721c0,0,1.659,0.16,2.914,0.349c1.255,0.188,6.052,0.931,7.418,1.277  c1.368,0.346,4.641,2.005,6.298,3.215c1.659,1.21,4.528,3.272,4.528,3.272S54.645,18.799,51.911,19.785z M57.335,9.565  c-0.045,1.39-0.493,2.197-0.493,2.197s-6.992-3.651-8.875-4.134c-1.884-0.484-6.769-0.932-8.248-1.246s-3.541-0.135-3.541-0.135  V6.068h7.889c0,0,0.089-0.045,1.008,0s11.408,0,11.408,0S57.38,8.176,57.335,9.565z'],
          'width': 62,
          'height': 22,
          'color': {
            'default': '#6034fb',
            'hover': '#fbc034'
          }
        },
        'multimedias': {
          'path': ['M38.87,29.793c-5.85-1.305-9.299-5.755-11.36-9.479c4.706-0.035,8.21-0.077,8.21-0.077 c-2.645-0.832-7.896-5.228-11.253-9.822h6.715C28.254,9.292,19.875,1.489,19.445,0c0,0-7.23,8.5-11.767,10.415h6.8 c-2.063,2.704-7.062,8.834-10.703,9.465c-1.808,0.316,2.813,0.434,9.039,0.461c-3.043,3.471-8.263,8.74-12.25,9.346 c-2.875,0.424,5.681,0.48,15.438,0.396v7.941h7.084v-8.006C31.466,29.927,38.87,29.793,38.87,29.793z'],
          'width': 39,
          'height': 38,
          'color': {
            'default': '#6034fb',
            'hover': '#34fbc5'
          }
        },
        'photography': {
          'path': ['M33.403,26.578l-3.28-6.747l-5.757,5.137l3.154,0.562c-0.991,4.381-6.081,7.201-9.141,8.52V14.013h6.977 v-3.961h-5.802c1.446-0.979,2.397-2.636,2.397-4.515c0-3.006-2.438-5.447-5.447-5.447s-5.447,2.441-5.447,5.447 c0,1.879,0.951,3.536,2.397,4.515H7.653v3.961h6.764v19.79c-2.309-1.303-5.635-3.91-7.455-8.631l3.415-0.574l-6.066-5.447 l-3.714,7.093l3.39-0.57c2.46,6.979,7.736,10.223,10.431,11.463v0.027h0.06c0.89,0.406,1.488,0.592,1.579,0.617l0.423,0.129 l0.426-0.129c0.499-0.148,11.857-3.633,13.564-11.725L33.403,26.578z M16.505,3.241c1.27,0,2.298,1.027,2.298,2.296 s-1.028,2.298-2.298,2.298c-1.269,0-2.294-1.029-2.294-2.298S15.236,3.241,16.505,3.241z'],
          'width': 34,
          'height': 38,
          'color': {
            'default': '#6034fb',
            'hover': '#e7ef00'
          }
        },
        'on-paper': {
          'path': [
            'M0.46,8.588C0.234,7.848,0.146,7.381,0.146,7.381S0.191,7.937,0.46,8.588z',
            'M56.322,10.494c-0.282-0.038-0.605-0.19-0.971-0.426c1.294-0.434,3.45-1.158,2.125-0.848 c-0.864,0.204-2.568-0.174-3.879-0.539c-0.265-0.228-0.547-0.475-0.84-0.729c2.724-0.721,5.416-2.992,5.416-2.992 c-4.325,1.029-6.331,0.601-6.331,0.601c-1.43-0.27-2.657-0.692-3.695-1.16c-1.375-0.885-2.652-1.817-3.925-2.595 c-0.088-0.088-0.134-0.139-0.134-0.139s0.015,0.031,0.043,0.083c-2.527-1.531-5.042-2.432-8.265-1.114 c-2.172,0.888-3.213,2.102-5.188,4.076c0,0-4.595-5.188-10.227-4.224C14.82,1.453,10.521,6.64,8.15,8.123 c-2.371,1.482-4.891,2.963-6.373,2.074C1.09,9.785,0.692,9.151,0.46,8.588c0.794,2.606,3.303,8.619,9.766,9.773 c8.3,1.482,12.598,0.136,16.008-2.087c3.409-2.224,3.705-3.558,3.705-3.558s4.596,4.438,9.931,5.332 c5.336,0.894,12.747-0.145,16.305-2.96c3.556-2.816,4.298-5.484,4.298-6.522C60.472,8.567,59.761,10.958,56.322,10.494z'
          ],
          'width': 61,
          'height': 19,
          'color': {
            'default': '#6034fb',
            'hover': '#ff005a'
          }
        }
      };

      for (var c in n) {
        d = m[g](c);
        d && (d = d[p]('span')[0]);

        var r = Raphael(d, n[c]['width'], n[c]['height']);
        var group = r.set().attr({'name': 'group'});

        n[c]['sets'] = [];

        for (var path in n[c]['path']) {
          n[c]['sets'].push(r.path(n[c]['path'][path]).attr({
            fill: n[c]['color']['default'],
            stroke: 'none',
            parent: 'group'
          }));
        }

        function hover() {
          var _this = $(this);
          var parent = _this.parent();
          var key = parent.attr('title');
          if (!parent.hasClass('hover')) {
            n[key]['sets'].forEach(function(el) {
              el.attr({
                fill: n[key]['color']['hover']
                });
            });

            parent.addClass('hover');

            _this.one('mouseout', function() {
              if (parent.hasClass('hover')) {
                n[key]['sets'].forEach(function(el) {
                  el.attr({
                    fill: n[key]['color']['default']
                  });
                });

                parent.removeClass('hover');

                _this.one('mouseover', hover);
              }
            });
          }
        }

        $(d).one('mouseover', hover);
      }

    var logo = m[g]('logo');
    logo.innerHTML = '';

    var rsr = Raphael(logo, '102.763', '102.763');
    rsr.rect(15.875, 16.049, 71.013, 71.014).attr({x: '15.875', y: '16.049', fill: '#FFFFFF', 'stroke-width': '0', 'stroke-opacity': '1'}).transform("m0.7077 0.7065 -0.7065 0.7077 51.4407 -21.2322").data('id', 'rect_a');
    rsr.rect(15.874, 15.671, 71.012, 71.014).attr({x: '15.874', y: '15.671', fill: 'none', stroke: '#000000', "stroke-width": '2', "stroke-miterlimit": '10', 'stroke-opacity': '1'}).transform("m0.7077 0.7065 -0.7065 0.7077 51.1729 -21.3412").data('id', 'rect_b');
    rsr.circle(51, 80, 3).attr({'stroke-width': '0', 'stroke-opacity': '1', 'fill': '#000000'}).data('id', 'circle_c');

    var Slideshow = {
      init: function(element, selectors) {
        this.element = element;
        this.selectors = selectors;

        this.swiper = new Swipe(this.element, {
          callback: function(event, index, item) {
            Slideshow.set_position(index);
          }
        });

        var _that = this;

        $.each(this.selectors, function(i, elem) {
          $(elem).on('click', function(e) {
            e.preventDefault();

            _that.set_position(i);

            _that.swiper.slide(parseInt(i, 10), 300);
          });
        });
      },

      set_position: function(index) {
        $.each(this.selectors, function(i, elem) {
          elem.classList.remove('active');
        });

        this.selectors[index].classList.add('active');
      }
    };

    Slideshow.init(document.getElementById('slider'), $('.slideshow-position-list li a'));
});
