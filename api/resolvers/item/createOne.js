const resolver = tc.schemaComposer.createResolver({
  name: 'createOne',
  kind: 'mutation',
  description: 'Create one document with mongoose defaults, setters, hooks and validation',
  type: outputType,
  args: _objectSpread({}, (0, _helpers.recordHelperArgs)(tc, _objectSpread({
    recordTypeName: `CreateOne${tc.getTypeName()}Input`,
    removeFields: ['id', '_id'],
    isRequired: true,
    requiredFields
  }, opts && opts.record))),
  resolve: async resolveParams => {
    const recordData = resolveParams.args && resolveParams.args.record || {};

    if (!(typeof recordData === 'object') || Object.keys(recordData).length === 0) {
      throw new Error(`${tc.getTypeName()}.createOne resolver requires at least one value in args.record`);
    }

    let doc = new model(recordData);

    if (resolveParams.beforeRecordMutate) {
      doc = await resolveParams.beforeRecordMutate(doc, resolveParams);
      if (!doc) return null;
    }

    await doc.save();
    return {
      record: doc,
      recordId: tc.getRecordIdFn()(doc)
    };
  }
});