import { $ecomConfig } from '@ecomplus/utils'
import CleaveInput from 'vue-cleave-component'

const countryCode = $ecomConfig.get('country_code')

export default {
  name: 'InputPhone',

  components: {
    CleaveInput,
    CleavePhone
  },

  props: {
    value: {
      type: [String, Number],
      required: true
    }
  },

  computed: {
    placeholder () {
      return countryCode === 'BR'
        ? '+84 9 9999-9999'
        : '+1 999 9999 9999'
    },

    localValue: {
      get () {
        return this.value
      },
      set (value) {
        this.$emit('input', value)
      }
    },
  }
}
