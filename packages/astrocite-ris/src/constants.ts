export const TYPE_MAP: ReadonlyMap<string, CSL.ItemType> = new Map<string, CSL.ItemType>([
    ['ABST', 'article'],
    ['ADVS', 'broadcast'],
    ['AGGR', 'dataset'],
    ['ANCIENT', 'article'],
    ['ART', 'graphic'],
    ['BILL', 'legislation'],
    ['BLOG', 'post-weblog'],
    ['BOOK', 'book'],
    ['CASE', 'legal_case'],
    ['CHAP', 'chapter'],
    ['CHART', 'figure'],
    ['CLSWK', 'musical_score'],
    ['COMP', 'article'],
    ['CONF', 'paper-conference'],
    ['CPAPER', 'paper-conference'],
    ['CTLG', 'article-magazine'],
    ['DATA', 'dataset'],
    ['DBASE', 'dataset'],
    ['DICT', 'entry-dictionary'],
    ['EBOOK', 'book'],
    ['ECHAP', 'chapter'],
    ['EDBOOK', 'book'],
    ['EJOUR', 'article-journal'],
    ['ELEC', 'webpage'],
    ['ENCYC', 'entry-encyclopedia'],
    ['EQUA', 'figure'],
    ['FIGURE', 'figure'],
    ['GEN', 'article'],
    ['GOVDOC', 'legislation'],
    ['GRANT', 'legislation'],
    ['HEAR', 'legal_case'],
    ['ICOMM', 'webpage'],
    ['INPR', 'article-journal'],
    ['JFULL', 'book'],
    ['JOUR', 'article-journal'],
    ['LEGAL', 'legal_case'],
    ['MANSCPT', 'manuscript'],
    ['MAP', 'map'],
    ['MGZN', 'article-magazine'],
    ['MPCT', 'motion_picture'],
    ['MULTI', 'webpage'],
    ['MUSIC', 'song'],
    ['NEWS', 'article-newspaper'],
    ['PAMP', 'pamphlet'],
    ['PAT', 'patent'],
    ['PCOMM', 'personal_communication'],
    ['RPRT', 'report'],
    ['SER', 'article'],
    ['SLIDE', 'figure'],
    ['SOUND', 'broadcast'],
    ['STAND', 'legislation'],
    ['STAT', 'legislation'],
    ['THES', 'thesis'],
    ['UNBILL', 'bill'],
    ['UNPB', 'manuscript'],
    ['VIDEO', 'broadcast'],
]);

export const FIELD_MAP: ReadonlyMap<string, keyof CSL.Data> = new Map<string, keyof CSL.Data>([
    ['AB', 'abstract'],
    ['AD', 'publisher-place'],
    ['AN', 'number'],
    ['AV', 'archive_location'],
    ['C3', 'event'],
    ['C7', 'number'],
    ['CA', 'annote'],
    ['CN', 'call-number'],
    ['CY', 'publisher-place'],
    ['DB', 'source'],
    ['DO', 'DOI'],
    ['DP', 'archive'],
    ['ET', 'edition'],
    ['ID', 'id'],
    ['IS', 'issue'],
    ['J1', 'container-title'],
    ['J2', 'journalAbbreviation'],
    ['JA', 'journalAbbreviation'],
    ['JF', 'container-title'],
    ['JO', 'container-title'],
    ['L2', 'URL'],
    ['LA', 'language'],
    ['LK', 'URL'],
    ['M1', 'number'],
    ['M3', 'note'],
    ['N1', 'note'],
    ['N2', 'abstract'],
    ['NV', 'number-of-volumes'],
    ['OP', 'original-title'],
    ['PB', 'publisher'],
    ['PP', 'publisher-place'],
    ['RI', 'reviewed-title'],
    ['RN', 'note'],
    ['RP', 'status'],
    ['SE', 'section'],
    ['SP', 'page-first'],
    ['ST', 'shortTitle'],
    ['T1', 'title'],
    ['T2', 'container-title'],
    ['T3', 'collection-title'],
    ['TI', 'title'],
    ['UR', 'URL'],
    ['VL', 'volume'],
    ['VO', 'call-number'],
]);