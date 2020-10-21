(function() {var implementors = {};
implementors["ink_env"] = [{"text":"impl Send for ReturnFlags","synthetic":true,"types":[]},{"text":"impl Send for AccountId","synthetic":true,"types":[]},{"text":"impl Send for Hash","synthetic":true,"types":[]},{"text":"impl Send for Error","synthetic":true,"types":[]},{"text":"impl Send for DefaultEnvironment","synthetic":true,"types":[]},{"text":"impl&lt;E, Callee, GasLimit, TransferredValue, Args, RetType&gt; Send for CallBuilder&lt;E, Callee, GasLimit, TransferredValue, Args, RetType&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Args: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;Callee: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;GasLimit: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;RetType: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;TransferredValue: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;E, Args, R&gt; Send for CallParams&lt;E, Args, R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Args: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;E as Environment&gt;::AccountId: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;E as Environment&gt;::Balance: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;E, CodeHash, GasLimit, Endowment, Args, R&gt; Send for CreateBuilder&lt;E, CodeHash, GasLimit, Endowment, Args, R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Args: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;CodeHash: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;Endowment: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;GasLimit: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;E, Args, R&gt; Send for CreateParams&lt;E, Args, R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Args: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;E as Environment&gt;::Balance: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;E as Environment&gt;::Hash: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;Args&gt; Send for ExecutionInput&lt;Args&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Args: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for Selector","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for ReturnType&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for Set&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for Unset&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;Head, Rest&gt; Send for ArgumentList&lt;Head, Rest&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Head: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;Rest: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for Argument&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for ArgumentListEnd","synthetic":true,"types":[]},{"text":"impl Send for CallData","synthetic":true,"types":[]},{"text":"impl Send for ChainSpec","synthetic":true,"types":[]},{"text":"impl Send for EmittedEvent","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for DefaultAccounts&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Environment&gt;::AccountId: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for Sha2x256","synthetic":true,"types":[]},{"text":"impl Send for Keccak256","synthetic":true,"types":[]},{"text":"impl Send for Blake2x256","synthetic":true,"types":[]},{"text":"impl Send for Blake2x128","synthetic":true,"types":[]}];
implementors["ink_lang"] = [{"text":"impl&lt;'a, T&gt; Send for EnvAccess&lt;'a, T&gt;","synthetic":true,"types":[]}];
implementors["ink_lang_ir"] = [{"text":"impl&lt;'a, C&gt; !Send for CallableWithSelector&lt;'a, C&gt;","synthetic":true,"types":[]},{"text":"impl !Send for Config","synthetic":true,"types":[]},{"text":"impl !Send for Constructor","synthetic":true,"types":[]},{"text":"impl !Send for Contract","synthetic":true,"types":[]},{"text":"impl !Send for Event","synthetic":true,"types":[]},{"text":"impl !Send for InkTest","synthetic":true,"types":[]},{"text":"impl !Send for InkTrait","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !Send for InkTraitConstructor&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !Send for InkTraitMessage&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !Send for InputsIter&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl !Send for ItemImpl","synthetic":true,"types":[]},{"text":"impl !Send for ItemMod","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !Send for IterConstructors&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !Send for IterEvents&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !Send for IterInkTraitItems&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !Send for IterItemImpls&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !Send for IterMessages&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl !Send for Message","synthetic":true,"types":[]},{"text":"impl Send for Namespace","synthetic":true,"types":[]},{"text":"impl Send for Selector","synthetic":true,"types":[]},{"text":"impl !Send for Storage","synthetic":true,"types":[]},{"text":"impl Send for CallableKind","synthetic":true,"types":[]},{"text":"impl !Send for ImplItem","synthetic":true,"types":[]},{"text":"impl !Send for InkItem","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !Send for InkTraitItem&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl !Send for Item","synthetic":true,"types":[]},{"text":"impl Send for Receiver","synthetic":true,"types":[]},{"text":"impl !Send for Visibility","synthetic":true,"types":[]}];
implementors["ink_metadata"] = [{"text":"impl&lt;F&gt; Send for ConstructorSpec&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;F as Form&gt;::String: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;F as Form&gt;::Type: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;Selector&gt; Send for ConstructorSpecBuilder&lt;Selector&gt;","synthetic":true,"types":[]},{"text":"impl&lt;F&gt; Send for ContractSpec&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;F as Form&gt;::String: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;F as Form&gt;::Type: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;S&gt; Send for ContractSpecBuilder&lt;S&gt;","synthetic":true,"types":[]},{"text":"impl&lt;F&gt; Send for EventParamSpec&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;F as Form&gt;::String: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;F as Form&gt;::Type: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for EventParamSpecBuilder","synthetic":true,"types":[]},{"text":"impl&lt;F&gt; Send for EventSpec&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;F as Form&gt;::String: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;F as Form&gt;::Type: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for EventSpecBuilder","synthetic":true,"types":[]},{"text":"impl&lt;F&gt; Send for MessageParamSpec&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;F as Form&gt;::String: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;F as Form&gt;::Type: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for MessageParamSpecBuilder","synthetic":true,"types":[]},{"text":"impl&lt;F&gt; Send for MessageSpec&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;F as Form&gt;::String: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;F as Form&gt;::Type: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;Selector, Mutates, IsPayable, Returns&gt; Send for MessageSpecBuilder&lt;Selector, Mutates, IsPayable, Returns&gt;","synthetic":true,"types":[]},{"text":"impl&lt;F&gt; Send for ReturnTypeSpec&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;F as Form&gt;::String: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;F as Form&gt;::Type: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for Selector","synthetic":true,"types":[]},{"text":"impl&lt;F&gt; Send for TypeSpec&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;F as Form&gt;::String: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;F as Form&gt;::Type: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for InkProject","synthetic":true,"types":[]},{"text":"impl Send for LayoutKey","synthetic":true,"types":[]},{"text":"impl&lt;F&gt; Send for CellLayout&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;F as Form&gt;::Type: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;F&gt; Send for HashLayout&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;F as Form&gt;::String: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;F as Form&gt;::Type: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for HashingStrategy","synthetic":true,"types":[]},{"text":"impl&lt;F&gt; Send for ArrayLayout&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;F as Form&gt;::String: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;F as Form&gt;::Type: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;F&gt; Send for StructLayout&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;F as Form&gt;::String: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;F as Form&gt;::Type: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;F&gt; Send for FieldLayout&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;F as Form&gt;::String: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;F as Form&gt;::Type: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for Discriminant","synthetic":true,"types":[]},{"text":"impl&lt;F&gt; Send for EnumLayout&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;F as Form&gt;::String: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;F as Form&gt;::Type: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;F&gt; Send for Layout&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;F as Form&gt;::String: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;F as Form&gt;::Type: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for CryptoHasher","synthetic":true,"types":[]}];
implementors["ink_primitives"] = [{"text":"impl Send for Key","synthetic":true,"types":[]},{"text":"impl Send for KeyPtr","synthetic":true,"types":[]}];
implementors["ink_storage"] = [{"text":"impl&lt;T&gt; Send for Box&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for Vec&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for Lazy&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for Memory&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for Pack&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for DynamicAllocation","synthetic":true,"types":[]},{"text":"impl Send for ContractPhase","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for BinaryHeap&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for BitStash","synthetic":true,"types":[]},{"text":"impl Send for Bitvec","synthetic":true,"types":[]},{"text":"impl&lt;K, V, H&gt; Send for HashMap&lt;K, V, H&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;H: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;K: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T, N&gt; Send for SmallVec&lt;T, N&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for Stash&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, T&gt; !Send for Iter&lt;'a, T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a, T&gt; Send for IterMut&lt;'a, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for Reverse&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, T&gt; Send for PeekMut&lt;'a, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for BitRefMut&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for ChunkRef&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !Send for BitsIter&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for BitsIterMut&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a, K, V, H&gt; !Send for Iter&lt;'a, K, V, H&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a, K, V, H&gt; !Send for IterMut&lt;'a, K, V, H&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a, K&gt; !Send for Keys&lt;'a, K&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a, K, V, H&gt; !Send for Values&lt;'a, K, V, H&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a, K, V, H&gt; !Send for ValuesMut&lt;'a, K, V, H&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a, K, V&gt; Send for OccupiedEntry&lt;'a, K, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, K, V&gt; Send for VacantEntry&lt;'a, K, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, K, V&gt; Send for Entry&lt;'a, K, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, T, N&gt; !Send for Iter&lt;'a, T, N&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a, T, N&gt; Send for IterMut&lt;'a, T, N&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, T&gt; !Send for Iter&lt;'a, T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a, T&gt; Send for IterMut&lt;'a, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for VacantEntry","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for Entry&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, T&gt; !Send for Iter&lt;'a, T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a, T&gt; Send for IterMut&lt;'a, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for IndexOutOfBounds","synthetic":true,"types":[]},{"text":"impl&lt;T, N&gt; Send for LazyArray&lt;T, N&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for LazyCell&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;V&gt; Send for LazyIndexMap&lt;V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;V: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;K, V, H&gt; Send for LazyHashMap&lt;K, V, H&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;H: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;K: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, K, V&gt; Send for OccupiedEntry&lt;'a, K, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, K, V&gt; Send for VacantEntry&lt;'a, K, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, K, V&gt; Send for Entry&lt;'a, K, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: Send,&nbsp;</span>","synthetic":true,"types":[]}];
implementors["scale_info"] = [{"text":"impl Send for MetaType","synthetic":true,"types":[]},{"text":"impl Send for Registry","synthetic":true,"types":[]},{"text":"impl Send for RegistryReadOnly","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for TypeDefComposite&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Form&gt;::String: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Form&gt;::Type: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for Field&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Form&gt;::String: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Form&gt;::Type: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for Path&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Form&gt;::String: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for TypeDefVariant&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Form&gt;::String: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Form&gt;::Type: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for Variant&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Form&gt;::String: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Form&gt;::Type: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for Type&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Form&gt;::String: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Form&gt;::Type: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for TypeDefArray&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Form&gt;::Type: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for TypeDefTuple&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Form&gt;::Type: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for TypeDefSequence&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Form&gt;::Type: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for PathError","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for TypeDef&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Form&gt;::String: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Form&gt;::Type: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for TypeDefPrimitive","synthetic":true,"types":[]},{"text":"impl&lt;S&gt; Send for TypeBuilder&lt;S&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for FieldsBuilder&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for VariantsBuilder&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl Send for NoFields","synthetic":true,"types":[]},{"text":"impl Send for NamedFields","synthetic":true,"types":[]},{"text":"impl Send for UnnamedFields","synthetic":true,"types":[]},{"text":"impl Send for Fields","synthetic":true,"types":[]},{"text":"impl Send for NoVariants","synthetic":true,"types":[]},{"text":"impl Send for VariantFields","synthetic":true,"types":[]},{"text":"impl Send for Fieldless","synthetic":true,"types":[]},{"text":"impl Send for Variants","synthetic":true,"types":[]},{"text":"impl Send for PathNotAssigned","synthetic":true,"types":[]},{"text":"impl Send for PathAssigned","synthetic":true,"types":[]},{"text":"impl Send for MetaForm","synthetic":true,"types":[]},{"text":"impl Send for CompactForm","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for UntrackedSymbol&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a, T&gt; Send for Symbol&lt;'a, T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for Interner&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()