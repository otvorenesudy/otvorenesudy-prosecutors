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
    'headline' : 'Majetkové priznania prokurátorov',
    'description' : 'Zoznam majetkových priznaní prokurátorov za roky 2011 &ndash; 2014',
    'data_source': 'Dáta sú získané z portálu',
    'general_prosecutors_office' : 'Generálnej prokuratúry Slovenskej Republiky',
    'disclaimer' : 'Udáje sú získané v originálnej podobe bez úprav a za ich správnosť autori portálu nezodpovedájú.',
    'data_availability': 'Dáta su dostupné na službe',
    'data_updated_at' : 'Dáta boli naposledy aktualizované {{ date }}.',
    'message_1' : 'Prokurátori odmietajú zverejňovať čo i len svoje pôsobisko. Ak ich poznáte, pomôžte umožniť lepšiu kontrolu ich práce. Ak sa to podarí, postupne budeme vedieť spájať prokurátorov s ich rozhodnutiami a tak zvýšiť kvalitu ich práce.',
    'message_2' : 'Ak žiadneho prokurátora nepoznáte, ale veríte, že vyvodzovanie zodpovednosti voči nim je pre Slovensko kľúčové',
    'message_2_link': 'podporte našu snahu finančne',
    'message_3' : 'Ďakujeme.'
  },

  'loading' : {
    'message' : 'Načítavam zoznam prokurátorov'
  },

  'prosecutor' : {
    'description': 'Majetkové priznania za roky {{ years }}',
    'prosecutors_list' : 'Zoznam prokurátorov',
    'search' : 'Vyhľadať na Otvorené Súdy'
  },

  'prosecutors' : {
    'list' : 'Zoznam prokurátorov',
    'description' : 'Vyhľadávate v zozname majetkových priznaní {{ count }} prokurátorov',
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
          'errors': {
            'office_is_required': 'Zvoľte prokuratúru.',
            'prosecutors_are_required': 'Zvoľte aspoň jedného prokurátora.'
          }
        }
      }
    }
  }
};
