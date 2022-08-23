# Migration Guide

If you are migrating from an earlier version of the [@bsi-cx/design-master-template-email](https://github.com/bsi-software/bsi-cx-design-master-template-email), which itself references to an earlier version of [@bsi-cx/design-standard-library-email](https://github.com/bsi-software/bsi-cx-design-standard-library-email), consult the following section ([Migration from Version 1.0.x](#migration-from-version-1.0.x))

## Migration from Version 1.0.x

If you were an early adapter of our new templates, a refactoring may be needed. Content elements that have been overwritten in your template and are referring to the _standard-library_, may need a migration. If your content elements are using the `element.render(...)` function, those content elements need a rewrite. 

A content element that used to look like this:
```twig
{% apply spaceless %}
    {% import '@bsi-cx/design-standard-library-email/content-elements/base/cta/prototype/template.twig' as element %}

    {{ element.render('cta-center-CLc9J9', 'cta-center-part-qt8DLo', '', '', '', '', '', '', '', properties.alignmentCenter) }}
{% endapply %} 
```

must be rewritten to:
```twig
{% apply spaceless %}
    {% include '@bsi-cx/design-standard-library-email/content-elements/base/cta/prototype/template.twig' with {
        elementId: 'cta-center-CLc9J9',
        elementPartId: 'cta-center-part-qt8DLo',
        alignment: properties.alignmentCenter
    } %}
{% endapply %} 
```

Make sure to:
- Switch from `import` to `include`
- Use `with` and pass in all customized variables instead of using `element.render(...)`

The customized variables can be picked from the content element implementation in the _standard-library_. In case of our example above, it looks like the following:

```twig
{% apply spaceless %}
    {% set elementId = elementId ?: 'cta-eoRgSU' %}
    {% set elementPartId = elementPartId ?: 'cta-part-YgQ87c' %}
    ...    
    {% set alignment = (alignment ?: properties.alignmentLeft) ?: 'left' %}

    <div data-bsi-element="{{ elementId }}" style="height: 38px">
        <table border="0" cellpadding="0" cellspacing="0" align="{{ alignment }}" 
...
```