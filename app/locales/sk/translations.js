export default {
  'property_declaration' : {
    'zero' : 'žiadne majektové priznania',
    'one' : '{{ count }} majetkové priznanie',
    'two' : '{{ count }} majetkové priznania',
    'few' : '{{ count }} majetkové priznania',
    'many' : '{{ count }} majetkových priznaní'
  },

  // Views
  'application' : {
    'donate' : 'Podporte náš boj za transparentnejšie súdnictvo',
    'headline' : 'Pomôžte nám otvoriť slovenskú prokuratúru',
    'description' : 'Zoznam majetkových priznaní prokurátorov za roky 2011 &ndash; 2014',
    'data_source': 'Dáta sú získané z portálu',
    'general_prosecutors_office' : 'Generálnej prokuratúry Slovenskej Republiky',
    'disclaimer' : 'Udáje sú získané v originálnej podobe bez úprav a za ich správnosť autori portálu nezodpovedájú.',
    'data_availability': 'Dáta su dostupné na službe',
    'data_updated_at' : 'Dáta boli naposledy aktualizované {{ date }}.',
    'message_1': 'Zo 146 556 trestných rozhodnutí na portáli Otvorené Súdy je až 70 067 Trestných rozkazov a 29 510 Dohôd o vine a treste. Až v 68 % trestných prípadov, tak o vine, či nevine ako aj výške trestu reálne rozhoduje prokurátor a nie sudca.',
    'message_2' : 'Napriek tomu prokurátori odmietajú zverejňovať čo i len svoje pôsobisko. Ak ich poznáte, pomôžte umožniť lepšiu kontrolu ich práce. Ak sa to podarí, postupne budeme vedieť spájať prokurátorov s ich rozhodnutiami a tak zvýšiť kvalitu ich práce.',
    'message_3' : 'Ak žiadneho prokurátora nepoznáte, ale veríte, že vyvodzovanie zodpovednosti voči nim je pre Slovensko kľúčové',
    'message_3_link': 'podporte našu snahu finančne',
    'message_4' : 'Ďakujeme.',
    'refine': 'Chcem doplniť pôsobisko prokurátorov'
  },

  'loading' : {
    'message' : 'Načítavam zoznam prokurátorov'
  },

  'prosecutor' : {
    'description': 'Majetkové priznania za roky {{ years }}',
    'prosecutors_list' : 'Zoznam prokurátorov',
    'search' : 'Vyhľadať na Otvorené Súdy',
    'report_incorrect_organisation': 'Nahlásiť nesprávnu prokuratúru',
    'report_subject': 'Chybné pôsobisko prokurátora {{name}}',
    'report_body': 'Dobrý deň,%0D%0A%0D%0Aprokurátor {{name}} nepracuje na prokuratúre {{organisation}}.%0D%0A%0D%0AViem o tom, pretože ...%0D%0A%0D%0APodľa mojich informácií pracuje na ...%0D%0A%0D%0AS pozdravom,%0D%0A...',
    'refine': 'Doplniť prokuratúru'
  },

  'prosecutors' : {
    'list' : 'Zoznam prokurátorov',
    'description' : 'Vyhľadávate v zozname majetkových priznaní {{ count }} prokurátorov <br> za roky 2011 &ndash; 2014',
    'search_placeholder' : 'Vyhľadávajte podľa mena ako Čentéš, Čižnár, Trnka, Šufliarsky ...'
  },

  'components' : {
    'property-declaration-table' : {
      'description': 'Názov/popis',
      'acquisition_reason' : 'Dovôd nadobudnutia',
      'acquisition_date' : 'Dátum nadobudnutia'
    },

    'property-declarations-list': {
      'headline' : 'Majetkové priznanie za rok {{ year }}',

      'incomes' : {
        'caption' : 'Príjmy a iné pôžitky',
        'description' : 'Názov/popis',
        'value': 'Príjem (v &euro;)'
      },

      'statements' : 'Vyhlásenia'
    },

    'prosecutors-list' : {
      'unfold_more' : 'Zobraziť dalších prokurátorov',
      'metadata': 'Ďalšie informácie'
    },

   'prosecutor-metadata' : {
      'refine' : 'Doplniť',
      'refine_tooltip' : 'Doplniť'
    },

    'prosecutors': {
      'refine': {
        'refinement-form': {
          'close': 'Zavrieť',
          'save': 'Uložiť',
          'title': 'Pomôžte nám doplniť pôsobisko prokurátorov',
          'select_an_office': 'Vyberte prokuratúru',
          'select_a_prosecutor': 'Zadajte mená prokurátorov',
          'prosecutor_office': 'Prokuratúra',
          'prosecutors_in_office': 'Prokurátori, ktorí pracujú na zvolenej prokuratúre',
          'success_title': 'Ďakujeme Vám.',
          'success_message': 'Váš príspevok sme úspešne uložili a onedlho ho zverejníme.',
          'email_label': 'Váš email',
          'email_placeholder': 'peter.pan@example.com',
          'name_placeholder': 'Peter Pan',
          'name_label': 'Vaše meno',
          'errors': {
            'office_is_required': 'Zvoľte prokuratúru.',
            'prosecutors_are_required': 'Zvoľte aspoň jedného prokurátora.',
            'name_is_required': 'Uvedte Vaše meno.',
            'email_is_required': 'Uvedte Váš email.',
            'email_is_invalid': 'Email nemá správny formát.',
            'server_error': 'Ups, niečo sa pokazilo. Prosím, pokračujte neskôr.'
          }
        }
      }
    }
  }
};
