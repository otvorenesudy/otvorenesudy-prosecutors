export default {
  'property_declaration' : {
    'one' : '{{ count }} property declaration',
    'other' : '{{ count }} property declarations'
  },

  // Views
  'application' : {
    'donate' : 'Help us to make judiciary more transparent',
    'headline' : 'Help us to make slovak judiciary transparent',
    'description' : 'List of property declarations of prosecutors in years of 2011 &ndash; 2014',
    'data_source': 'Data was obtained from ',
    'general_prosecutors_office' : 'General Prosecutor\'s Office of Slovak Republic',
    'disclaimer' : 'Data was acquired in original form without any modification and authors are not responsible for its accuracy.',
    'data_availability': 'Data is available at',
    'data_updated_at' : 'The last updated was performed on {{ date }}.',
    'message_1': 'Out of 146 556 criminal decrees published on Open Courts website, 70 067 is a criminal ban and 29 510 is a criminal charge settlement. Therefore, in 68% of criminal cases, not the judge, but a prosecutor gives the judgments about legitimacy of a criminal case and the length of the punishment.',
    'message_2' : 'Despite that, the prosecutors refuse to publish as much as information about where they work. If you know any of them, please help us in controlling them. If we succeed, in time we will be able to connect their names with their decisions and therefore push for the quality of their work.',
    'message_3' : 'If you do not know any prosecutor but believe that holding them accountable is one of the crucial tasks for Slovakia',
    'message_3_link': 'support our efforts financially.',
    'message_4' : 'Thank you.',
    'refine': 'Refine offices of prosecutors now'
  },

  'loading' : {
    'message' : 'Loading list of prosecutors'
  },

  'prosecutor' : {
    'description': 'Property declarations for years of {{ years }}',
    'prosecutors_list' : 'List of Prosecutors',
    'search' : 'Search on Otvorené Súdy',
    'report_incorrect_organisation': 'Report Incorrect Office',
    'refine': 'Refine Office',
    'report_subject': 'Chybné pôsobisko prokurátora {{name}}',
    'report_body': 'Dobrý deň,%0D%0A%0D%0Aprokurátor {{name}} nepracuje na prokuratúre {{organisation}}.%0D%0A%0D%0AViem o tom, pretože ...%0D%0A%0D%0APodľa mojich informácií pracuje na ...%0D%0A%0D%0AS pozdravom,%0D%0A...'
  },

  'prosecutors' : {
    'list' : 'List of Prosecutors',
    'description' : 'Searching in a list of {{ count }} prosecutors in years of <br> 2011 &ndash; 2014',
    'search_placeholder' : 'Search by name like Čentéš, Čižnár, Trnka, Šufliarsky ...'
  },

  // Components
  'components' : {
    'property-declaration-table' : {
      'description': 'Name/Description',
      'acquisition_reason' : 'Acquisition Reason',
      'acquisition_date' : 'Acquisition Date'
    },

    'property-declarations-list': {
      'headline' : 'Property Declarations of year {{ year }}',

      'incomes' : {
        'caption' : 'Incomes',
        'description' : 'Description',
        'value': 'Amount (in &euro;)'
      },

      'statements' : 'Statements'
    },

    'prosecutors-list' : {
      'unfold_more' : 'Show more prosecutors',
      'metadata': 'More Information'
    },

   'prosecutor-metadata' : {
      'refine' : 'Refine',
      'refine_tooltip' : 'Refine'
    },

    'prosecutors': {
      'refine': {
        'refinement-form': {
          'title': 'Help us to extend data about prosecutors',
          'select_an_office': 'Select an office',
          'close': 'Close',
          'save': 'Save',
          'select_a_prosecutor': 'Type in the names of prosecutors',
          'prosecutor_office': 'Public Prosecutor\'s Office',
          'prosecutors_in_office': 'Prosecutors working at selected office',
          'success_title': 'Thank you.',
          'success_message': 'We\'ve successfully saved your refinement and shortly we\'ll make it public.',
          'email_label': 'Your Email',
          'email_placeholder': 'peter.pan@example.com',
          'name_placeholder': 'Peter Pan',
          'name_label': 'Your Name',
          'errors': {
            'office_is_required': 'Select an office.',
            'prosecutors_are_required': 'Select at least one of the prosecutors.',
            'name_is_required': 'Specify your name.',
            'email_is_required': 'Specify your email.',
            'email_is_invalid': 'Email is invalid.',
            'server_error': 'Oops, something went wrong. Please, continue later. We\'re working on it!'
          }
        }
      }
    }
  }
};
