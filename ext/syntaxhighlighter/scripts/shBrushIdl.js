;(function()
{
    // CommonJS
    typeof(require) != 'undefined' ? SyntaxHighlighter = require('shCore').SyntaxHighlighter : null;

    function Brush()
    {
        // Contributed by Aaron Radzinski.

        const keywords = 'flow fragment import intent meta ordered term';
        const literals = 'false null true';
        const symbols =	'[\\[\\]{}*+?~=]+';
        const fns = 'abs acos asin atan atn2 cbrt ceil comp_addr comp_city comp_country comp_id comp_name comp_postcode comp_region comp_website cos cosh count day_of_month day_of_week day_of_year degrees euler exp expm1 first floor get has has_all has_any hour hypot if is_alpha is_alphanum is_alphanumspace is_alphaspace is_empty is_num is_numspace is_whitespace json keys last length list log log10 log1p lowercase max meta_company meta_conv meta_frag meta_intent meta_model meta_part meta_req meta_sys meta_tok meta_user min minute month non_empty now pi pow quarter radians rand req_addr req_agent req_id req_normtext req_tstamp reverse rint round second signum sin sinh size sort split split_trim sqrt square strip tan tanh to_double to_string tok_aliases tok_ancestors tok_end_idx tok_find_part tok_find_parts tok_groups tok_id tok_is_abstract tok_is_bracketed tok_is_direct tok_is_english tok_is_freeWord tok_is_quoted tok_is_stopword tok_is_swear tok_is_user tok_is_wordnet tok_lemma tok_parent tok_pos tok_sparsity tok_start_idx tok_stem tok_this tok_unid tok_value trim uppercase user_admin user_email user_fname user_id user_lname user_signup_tstamp values week_of_month week_of_year year';

        this.regexList = [
            { regex: SyntaxHighlighter.regexLib.singleLineCComments, css: 'comments' },	// One line comments.
            { regex: SyntaxHighlighter.regexLib.multiLineCComments,	css: 'comments' }, // Multiline comments.
            { regex: SyntaxHighlighter.regexLib.doubleQuotedString,	css: 'string' }, // String.
            { regex: SyntaxHighlighter.regexLib.singleQuotedString, css: 'string' }, // String.
            { regex: /0x[a-f0-9]+|\d+(\.\d+)?/gi, css: 'value' }, // Numbers.
            { regex: new RegExp(this.getKeywords(keywords), 'gm'), css: 'keyword' }, // Keywords.
            { regex: new RegExp(this.getKeywords(literals), 'gm'), css: 'color1' }, // Literals.
            { regex: /<|>|<=|>=|==|!=|&&|\|\|/g, css: 'color2' }, // Operators.
            { regex: new RegExp(this.getKeywords(fns), 'gm'), css: 'functions' }, // Functions.
            { regex: new RegExp(symbols, 'gm'), css: 'color3' } // Symbols.
        ];
    }

    Brush.prototype	= new SyntaxHighlighter.Highlighter();
    Brush.aliases	= ['idl'];

    SyntaxHighlighter.brushes.Idl = Brush;

    // CommonJS.
    typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();
